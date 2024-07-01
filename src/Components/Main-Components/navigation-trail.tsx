import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../breadcrumb";

interface TrailLink {
  label: string;
  href: string;
}

interface NavigationTrailProps {
  trailLink: TrailLink[];
  trailPage: string;
}

export const NavigationTrail: React.FC<NavigationTrailProps> = ({
  trailLink,
  trailPage,
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {trailLink.map((link) => (
          <React.Fragment key={link.label}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href={link.href}>{link.label}</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{trailPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
