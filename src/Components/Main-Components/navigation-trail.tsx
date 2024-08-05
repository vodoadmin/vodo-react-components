import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../breadcrumb";
import { Link } from "react-router-dom";

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
                <Link to={link.href}>{link.label}</Link>
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
