"use client";
import React, { useState } from "react";
import { VirtualScroller } from "primereact/virtualscroller";
import { classNames } from "primereact/utils";

export default function BasicDemo() {
  const [items] = useState(
    Array.from({ length: 100000 }).map(
      (_, i) => `Tin tức trong ngày hôm nay #${i}`
    )
  );

  const itemTemplate = (item, options) => {
    const className = classNames("flex align-items-center p-2", {
      "surface-hover": options.odd,
    });

    return (
      <div
        className={className}
        style={{ height: options.props.itemSize + "px" }}
      >
        {item}
      </div>
    );
  };

  return (
    <div className="flex justify-content-center">
      <VirtualScroller
        items={items}
        itemSize={50}
        itemTemplate={itemTemplate}
        style={{ width: "500px", height: "650px" }}
      />
    </div>
  );
}
