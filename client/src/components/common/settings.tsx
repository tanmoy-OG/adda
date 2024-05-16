import useLogout from "@/hooks/use-logout";
import SettingsSvg from "@/icons/settings-svg";

const Settings = () => {
  const { loading, logout } = useLogout();

  return (
    <details className="dropdown dropdown-right dropdown-end">
      <summary className="btn hover:bg-info hover:border-info group size-10 min-h-0 p-2">
        <SettingsSvg />
      </summary>
      <ul className="menu dropdown-content rounded-btn bg-base-100 z-[1] w-48 gap-2 p-2 shadow">
        <li>
          <button
            className="btn btn-disabled btn-sm"
            disabled={loading}
            onClick={logout}
          >
            {loading ? (
              <span className="loading loading-spinner text-primary"></span>
            ) : (
              "Edit Profile"
            )}
          </button>
        </li>
        <li>
          <button
            className="btn btn-accent btn-sm"
            disabled={loading}
            onClick={logout}
          >
            {loading ? (
              <span className="loading loading-spinner text-info"></span>
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
