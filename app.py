from flask import Flask, jsonify, request
import os
import subprocess
import time

app = Flask(__name__)

# Run the spark healthreport command
@app.route('/server/healthreport', methods=['GET'])
def spark_healthreport():
    try:
        # Send the "spark healthreport" command to the tmux session
        subprocess.run(["tmux", "send-keys", "-t", "minecraft", "spark healthreport", "Enter"])
        
        # Allow some time for the server to generate the output
        subprocess.run(["sleep", "2"])

        # Capture the tmux session's output
        result = subprocess.run(["tmux", "capture-pane", "-t", "minecraft", "-p"], stdout=subprocess.PIPE, text=True)
        output = result.stdout

        # Extract relevant sections from the output
        report = {}
        lines = output.split("\n")

        for i, line in enumerate(lines):
            if "TPS from last" in line:
                report['tps'] = lines[i + 1].strip()
            elif "Tick durations" in line:
                report['tick_durations'] = lines[i + 1].strip()
            elif "CPU usage from last" in line:
                report['cpu_usage'] = lines[i + 1:i + 3]
            elif "Memory usage:" in line:
                report['memory_usage'] = lines[i + 1].strip()
            elif "Network usage:" in line:
                report['network_usage'] = lines[i + 1:i + 5]
            elif "Disk usage:" in line:
                report['disk_usage'] = lines[i + 1].strip()

        return jsonify({"healthreport": report}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Start the Minecraft server
@app.route('/server/start', methods=['POST'])
def start_server():
    try:
        # Start the server in a tmux session
        subprocess.Popen(["tmux", "new-session", "-d", "-s", "minecraft", "./start.sh"], cwd="/home/hittermcgee/Desktop/paper-1.21.4")
        return jsonify({"message": "Server starting..."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/stop', methods=['POST'])
def stop_server():
    try:
        # Check if the tmux session exists
        session_check = subprocess.run(
            ["tmux", "has-session", "-t", "minecraft"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        if session_check.returncode != 0:
            return jsonify({"status": "Server is not running."}), 400

        # Send the stop command to the server
        subprocess.run(["tmux", "send-keys", "-t", "minecraft", "stop", "ENTER"])

        # Wait for the server to shut down (optional, replace 5 with a suitable timeout if needed)
        time.sleep(5)

        # Kill the tmux session
        subprocess.run(["tmux", "kill-session", "-t", "minecraft"])

        return jsonify({"status": "Server stopped successfully."})
    except Exception as e:
        return jsonify({"status": "Failed to stop server.", "error": str(e)}), 500

# Check server status
@app.route('/server/status', methods=['GET'])
def server_status():
    try:
        result = subprocess.run(["tmux", "has-session", "-t", "minecraft"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if result.returncode == 0:
            return jsonify({"status": "running"}), 200
        else:
            return jsonify({"status": "stopped"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
