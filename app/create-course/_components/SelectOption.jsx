import { FcAlarmClock, FcPortraitMode, FcPositiveDynamic, FcStart, FcViewDetails } from "react-icons/fc";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SelectOption() {
  return (
    <div className="px-20 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">

        <div>
          <label className="text-sm flex gap-1"><FcPositiveDynamic />Difficulty Level</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm flex gap-1"><FcAlarmClock/>Course Duration</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 2 Hours">More than 2 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm flex gap-1"><FcStart />Add Video</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>

            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm flex gap-1"><FcViewDetails />Number of Chapters</label>
          <Input type="number"/>
        </div>

      </div>
    </div>
  );
}

export default SelectOption;
