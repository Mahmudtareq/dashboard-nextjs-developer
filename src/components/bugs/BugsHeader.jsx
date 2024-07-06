'use client'
import { generateBreadcrumbs } from "@/utils/BreadcrumList";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BugsHeader = () => {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <header className="mb-5 mt-2">
      <div className="flex flex-wrap justify-between items-center page-header ">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            Bugs Lists
          </h3>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map(({ label, path, isLast }) => (
              <React.Fragment key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={path}
                    className={
                      pathname === path
                        ? "text-fuchsia-500"
                        : "dark:text-white dark:hover:text-white "
                    }
                  >
                    {label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default BugsHeader;