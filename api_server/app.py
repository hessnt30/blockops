from flask import Flask, jsonify, request
import os
import subprocess
import time

app = Flask(__name__)

# Run the spark healthreport command
@app.route('/server/check/health', methods=['GET'])
def spark_healthreport():
    try:
        subprocess.run(["tmux", "send-keys", "-t", "minecraft", "spark healthreport", "Enter"])

        # Capture the tmux session's output
        result = subprocess.run(["tmux", "capture-pane", "-t", "minecraft", "-p"], stdout=subprocess.PIPE, text=True)
        output = result.stdout

        cpu_usage_10s = None
        memory_usage_percentage = None

        # Process each line of the output
        lines = output.split("\n")
        for i, line in enumerate(lines):
            # Look for the CPU usage section
            if "CPU usage from last" in line:
                # Extract the "process" line (next 2 lines include system and process usage)
                process_line = lines[i + 2]
                # Extract the last 10s percentage from the process line
                cpu_usage_10s = int(process_line.split(",")[0].strip().split()[0])  # Extract the first percentage
            # Look for the Memory usage section
            elif "Memory usage:" in line:
                # Extract the percentage from the memory usage line
                memory_line = lines[i + 1].strip()
                memory_usage_percentage = int(memory_line.split("(")[1].split("%")[0].strip())  # Extract the percentage

        # Return the extracted data as integers
        return jsonify({
            "healthreport": {
                "cpu_usage_10s": cpu_usage_10s,
                "memory_usage": memory_usage_percentage
            }
        }), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Start the Minecraft server
@app.route('/server/action/start', methods=['POST'])
def start_server():
    try:
        # Start the server in a tmux session
        subprocess.Popen(["tmux", "new-session", "-d", "-s", "minecraft", "./start.sh"], cwd="/home/hittermcgee/Desktop/paper-1.21.4")
        return jsonify({"message": "Server starting..."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/server/action/stop', methods=['POST'])
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
@app.route('/server/check/status', methods=['GET'])
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
