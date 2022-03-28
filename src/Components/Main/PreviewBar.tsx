import { t } from "i18next";
import EmailIcon from "@mui/icons-material/Email";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import DraftsIcon from "@mui/icons-material/Drafts";
export default function PreviewBar(){
    return(
        <section className="flex w-11/12 mt-20">
        <div className="w-full flex justify-between">
          <div className="bg-indigo-600 w-64 h-36 rounded-2xl mb-10 flex justify-around">
            <span className="bg-white bg-opacity-30 flex h-5/6 items-end w-3/12 justify-center rounded-b-2xl">
              <EmailIcon sx={{ color: "#fff", fontSize: "50px" }} />
            </span>
            <div className="text-white flex flex-col items-center justify-center mr-5">
              <span className="text-5xl">12</span>
              <p className="text-xl mt-1">{t("Email")}</p>
            </div>
          </div>
          <div className="bg-orange-400 w-64 h-36 rounded-2xl flex justify-around">
            <span className="bg-white bg-opacity-30 flex h-5/6 items-end w-3/12 justify-center rounded-b-2xl">
              <MoveToInboxIcon sx={{ color: "#fff", fontSize: "50px" }} />
            </span>
            <div className="text-white flex flex-col items-center justify-center mr-5">
              <span className="text-5xl">9</span>
              <p className="text-xl mt-1">{t("Inbox")}</p>
            </div>
          </div>
          <div className="bg-cyan-400 w-64 h-36 rounded-2xl mb-10 flex justify-around">
            <span className="bg-white bg-opacity-30 flex h-5/6 items-end w-3/12 justify-center rounded-b-2xl">
              <StarBorderPurple500Icon
                sx={{ color: "#fff", fontSize: "50px" }}
              />
            </span>
            <div className="text-white flex flex-col items-center justify-center mr-5">
              <span className="text-5xl">0</span>
              <p className="text-xl mt-1">{t("Starred")}</p>
            </div>
          </div>
          <div className="bg-pink-500 w-64 h-36 rounded-2xl flex justify-around">
            <span className="bg-white bg-opacity-30 flex h-5/6 items-end w-3/12 justify-center rounded-b-2xl">
              <DraftsIcon sx={{ color: "#fff", fontSize: "50px" }} />
            </span>
            <div className="text-white flex flex-col items-center justify-center mr-5">
              <span className="text-5xl">3</span>
              <p className="text-xl mt-1">{t("Drafts")}</p>
            </div>
          </div>
        </div>
      </section>
    )
}