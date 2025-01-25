import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function IconUpload() {
  return (
    <>
      <div>
        <p>Your Server Icon must be 256x256 pixels.</p>
      </div>
      <div className="flex w-full max-w-lg items-end gap-2">
        <div className="grid w-full max-w-lg items-center gap-1.5 mt-4">
          <Label htmlFor="picture">Server Icon</Label>
          <Input id="picture" type="file" />
        </div>

        <Button type="submit">Upload</Button>
      </div>

      <div className="mt-4">
        <p>Preview</p>
      </div>
    </>
  );
}
