import { changeLog } from "@/config/changelog";
import { Bug, Paintbrush, Smile, Star } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="py-10 min-h-screen">
      <div className="container">
        {/*<!-- Component: Changelog feed --> */}
        <ul
          aria-label="Changelog feed"
          role="feed"
          className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
        >
          {changeLog.map((changed) => (
            <li role="article" className="relative pl-6">
              <div className="flex gap-10">
                <span className="flex-auto font-semibold text-primary w-[200px] text-2xl">
                  {changed.date}
                </span>
                <div className="flex flex-col gap-6 bg-background/75 backdrop-blur border-2 p-6 rounded-lg ChangeLog">
                  <div>
                    <h4 className="text-xl font-bold text-blue-500">
                      {changed.title}
                    </h4>
                    {changed.description && (
                      <p className=" text-slate-500">{changed.description}</p>
                    )}
                  </div>

                  {/* New Features */}
                  {changed.new && (
                    <div className="ChangeLOG__New__Features">
                      <h1 className="text-xl flex font-semibold items-center gap-1">
                        <Star />
                        New Features:
                      </h1>
                      {changed.new.description && (
                        <p className="description">{changed.new.description}</p>
                      )}

                      <ul className="card border backdrop-blur rounded-lg p-3 gap-3 m-1">
                        {changed.new.changed &&
                          changed.new.changed.map((change) => (
                            <li className="flex gap-1">
                              <Smile className="w-4" />
                              {change}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* Improvment Features */}
                  {changed.improvment && (
                    <div className="ChangeLOG__Improvment">
                      <h1 className="text-xl flex font-semibold items-center gap-1">
                        <Paintbrush />
                        Improvment:
                      </h1>
                      {changed.improvment.description && (
                        <p className="description">
                          {changed.improvment.description}
                        </p>
                      )}

                      <ul className="card border backdrop-blur rounded-lg p-3 gap-3 m-1">
                        {changed.improvment.changed &&
                          changed.improvment.changed.map((change) => (
                            <li className="flex gap-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.0051 16.2717L14.7117 12.9784L13.2984 14.3917L16.5917 17.685C16.9851 18.0784 17.6184 18.0784 18.0051 17.685C18.3917 17.2917 18.3917 16.6584 18.0051 16.2717Z"
                                  fill="#E59661"
                                ></path>
                                <path
                                  d="M15.7784 10.945C17.0651 10.945 18.1117 9.89835 18.1117 8.61169C18.1117 8.22502 18.0051 7.86502 17.8384 7.54502L16.0384 9.34502L15.0451 8.35169L16.8451 6.55169C16.5251 6.38502 16.1651 6.27835 15.7784 6.27835C14.4917 6.27835 13.4451 7.32502 13.4451 8.61169C13.4451 8.88502 13.4984 9.14502 13.5851 9.38502L12.3517 10.6184L11.1651 9.43169C11.4251 9.17169 11.4251 8.75169 11.1651 8.49169L10.6917 8.01835L12.1051 6.60502C11.3251 5.82502 10.0584 5.82502 9.27841 6.60502L7.39841 8.49169C7.13841 8.75169 7.13841 9.17169 7.39841 9.43169L7.87174 9.90502H6.17841C6.05174 9.90502 5.93174 9.95169 5.84508 10.045C5.65841 10.2317 5.65841 10.525 5.84508 10.7117L7.53841 12.405C7.72508 12.5917 8.01841 12.5917 8.20508 12.405C8.29174 12.3184 8.34508 12.1984 8.34508 12.0717V10.3784L8.81174 10.845C9.07174 11.105 9.49174 11.105 9.75174 10.845L10.9384 12.0317L6.70508 16.265C6.31174 16.6584 6.31174 17.2917 6.70508 17.6784C7.09841 18.0717 7.73174 18.0717 8.11841 17.6784L14.9984 10.805C15.2451 10.8917 15.5051 10.945 15.7784 10.945Z"
                                  fill="#E59661"
                                ></path>
                              </svg>
                              {change}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {/* New Features */}
                  {changed.bugs && (
                    <div className="ChangeLOG__Bugs">
                      <h1 className="text-xl flex font-semibold items-center gap-1">
                        <Bug />
                        Bugs:
                      </h1>
                      {changed.bugs.description && (
                        <p className="description">
                          {changed.bugs.description}
                        </p>
                      )}

                      <ul className="card border backdrop-blur rounded-lg p-3 gap-3 m-1">
                        {changed.bugs.changed &&
                          changed.bugs.changed.map((change) => (
                            <li className="flex gap-1">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.0051 16.2717L14.7117 12.9784L13.2984 14.3917L16.5917 17.685C16.9851 18.0784 17.6184 18.0784 18.0051 17.685C18.3917 17.2917 18.3917 16.6584 18.0051 16.2717Z"
                                ></path>
                                <path
                                  d="M15.7784 10.945C17.0651 10.945 18.1117 9.89835 18.1117 8.61169C18.1117 8.22502 18.0051 7.86502 17.8384 7.54502L16.0384 9.34502L15.0451 8.35169L16.8451 6.55169C16.5251 6.38502 16.1651 6.27835 15.7784 6.27835C14.4917 6.27835 13.4451 7.32502 13.4451 8.61169C13.4451 8.88502 13.4984 9.14502 13.5851 9.38502L12.3517 10.6184L11.1651 9.43169C11.4251 9.17169 11.4251 8.75169 11.1651 8.49169L10.6917 8.01835L12.1051 6.60502C11.3251 5.82502 10.0584 5.82502 9.27841 6.60502L7.39841 8.49169C7.13841 8.75169 7.13841 9.17169 7.39841 9.43169L7.87174 9.90502H6.17841C6.05174 9.90502 5.93174 9.95169 5.84508 10.045C5.65841 10.2317 5.65841 10.525 5.84508 10.7117L7.53841 12.405C7.72508 12.5917 8.01841 12.5917 8.20508 12.405C8.29174 12.3184 8.34508 12.1984 8.34508 12.0717V10.3784L8.81174 10.845C9.07174 11.105 9.49174 11.105 9.75174 10.845L10.9384 12.0317L6.70508 16.265C6.31174 16.6584 6.31174 17.2917 6.70508 17.6784C7.09841 18.0717 7.73174 18.0717 8.11841 17.6784L14.9984 10.805C15.2451 10.8917 15.5051 10.945 15.7784 10.945Z"

                                ></path>
                              </svg>
                              {change}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/*<!-- End Changelog feed --> */}
      </div>
    </div>
  );
};

export default page;
