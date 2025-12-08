import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center text-sm mb-6">
      <Link
        to="/"
        className="text-gray-500 hover:text-blue-600 transition-colors"
      >
        Dashboard
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <NavigateNextIcon className="text-gray-400 mx-2" fontSize="small" />
          {item.link ? (
            <Link
              to={item.link}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-blue-600">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
