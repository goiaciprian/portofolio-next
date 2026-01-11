import { publish } from "~/actions/publish.action";

export function PublishMenu() {
  return (
    <>
      <div
        id="publishMenu"
        popover="auto"
        className="rounded-2xl bg-business-black text-white text-xl font-semibold drop-shadow-black drop-shadow-2xl absolute [position-anchor:--publish-menu] top-[anchor(bottom)] left-[anchor(left)] select-none mt-3 peer/publishMenu"
      >
        <div className="flex flex-col gap-3 p-5 items-start">
          <button
            className="cursor-pointer"
            popoverTarget="publishMenu"
            popoverTargetAction="hide"
            onClick={() => {
              publish("STAGING", "PRODUCTION");
            }}
          >
            Publish Stage to Production
          </button>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-linear-to-r from-transparent to-transparent opacity-55 via-neutral-400 z-30" />
          <button
            className="cursor-pointer"
            popoverTarget="publishMenu"
            popoverTargetAction="hide"
            onClick={() => publish("PRODUCTION", "STAGING")}
          >
            Revert Stage to Production
          </button>
          <button
            className="cursor-pointer"
            popoverTarget="publishMenu"
            popoverTargetAction="hide"
            onClick={() => publish("BACKUP_PRODUCTION", "PRODUCTION")}
          >
            Revert Production to BACKUP
          </button>
          <button
            className="cursor-pointer"
            popoverTarget="publishMenu"
            popoverTargetAction="hide"
            onClick={() => publish("BACKUP_PRODUCTION", "STAGING")}
          >
            Revert Stage to BACKUP
          </button>
        </div>
      </div>
      <div className="peer-open/publishMenu:[&>button]:underline">
        <button
          popoverTarget="publishMenu"
          popoverTargetAction="toggle"
          className="[anchor-name:--publish-menu] py-3 px-6 rounded-xl cursor-pointer font-semibold underline-offset-4"
        >
          Publish
        </button>
      </div>
    </>
  );
}
