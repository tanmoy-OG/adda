import React from "react";

import useLogout from "@/hooks/use-logout";
import LogoutSvg from "@/icons/logout-svg";

const Settings = () => {
  const { loading, logout } = useLogout();

  return (
    <details className="dropdown dropdown-right dropdown-end">
      <summary className="btn btn-ghost size-10 min-h-0 p-2">
        <LogoutSvg />
      </summary>
      <ul className="menu dropdown-content rounded-btn bg-base-100 z-[1] w-48 p-2 shadow">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <button className="btn btn-sm" disabled={loading} onClick={logout}>
            {loading ? (
              <span className="loading loading-spinner text-primary"></span>
            ) : (
              "Log Out"
            )}
          </button>
        </li>
      </ul>
    </details>
  );
};

export default Settings;
