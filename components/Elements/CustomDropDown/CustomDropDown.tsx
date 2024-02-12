"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";

export function CustomDropDown({
  title,
  data,
  changeHandler,
  currentData,
}: {
  changeHandler: (e: any) => any;
  title: string;
  data: any;
  currentData: any;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto h-8 p-3 capitalize">
          {title} <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data?.map((item: string, index: number) => (
          <DropdownMenuCheckboxItem
            key={index}
            className="capitalize text-sm my-1 font-normal flex justify-evenly pl-0 items-center"
            checked={true}
            onCheckedChange={() => changeHandler(item)}
          >
            <span
              className={`${
                currentData === item.toLocaleLowerCase() ? "bg-accent" : ""
              } flex justify-center p-1 rounded-sm items-center hover:bg-accent w-full cursor-pointer`}
            >
              {item}
            </span>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
