import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FinanceSecurityBank2 } from "../../icons/FinanceSecurityBank2";
import { FinanceSecurityIdCard1 } from "../../icons/FinanceSecurityIdCard1";
import { SocialConnectionUser11 } from "../../icons/SocialConnectionUser11";
import "./style.css";

export const ChatAliado = () => {
  return (
    <div className="chat-aliado">
      <div className="group-wrapper-14">
        <div className="group-21">
          <div className="frame-189">
            <div className="overlap-150">
              <div className="overlap-wrapper-5">
                <div className="overlap-151">
                  <div className="overlap-wrapper-5">
                    <div className="overlap-151">
                      <div className="card-5" />

                      <div className="bg-13" />

                      <div className="btn-7">
                        <div className="overlap-group-41">
                          <div className="btn-bg-8">
                            <div className="btn-bg-9" />
                          </div>

                          <img
                            className="send-3"
                            alt="Send"
                            src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/send@2x.png"
                          />

                          <div className="text-wrapper-253">Send</div>
                        </div>

                        <div className="modal-edit-deal-6">
                          <div className="title-6">
                            <div className="text-wrapper-254">Edit Deal</div>

                            <Button
                              className="button-14"
                              style="white"
                              type="icon-only"
                            />
                          </div>

                          <div className="form-edit-deal-form-6">
                            <div className="content-SCROLL-5">
                              <div className="form-6">
                                <div className="upload-image-6">
                                  <div className="label-8">Room Images</div>

                                  <div className="image-21">
                                    <div className="placeholder-9">ADD</div>
                                  </div>
                                </div>

                                <Input
                                  className="input-15"
                                  label
                                  text="Address"
                                  text1="Street Address"
                                  visible2={false}
                                  visible3={false}
                                />
                                <div className="div-12">
                                  <Input
                                    className="input-16"
                                    label={false}
                                    text1="City"
                                    visible={false}
                                    visible1={false}
                                  />
                                  <Input
                                    className="state-10"
                                    divClassName="state-11"
                                    label={false}
                                    text1="State / Province"
                                    visible={false}
                                    visible1={false}
                                  />
                                  <Input
                                    className="zip-code-8"
                                    divClassName="zip-code-9"
                                    label={false}
                                    text1="Zip Code"
                                    visible={false}
                                    visible1={false}
                                  />
                                </div>

                                <div className="div-12">
                                  <Input
                                    className="input-16"
                                    label
                                    text="Room Area (m2)"
                                    text1="25"
                                    visible2={false}
                                    visible3={false}
                                  />
                                  <Input
                                    className="input-16"
                                    label
                                    text="# of People"
                                    text1="4"
                                    visible2={false}
                                    visible3={false}
                                  />
                                </div>

                                <Input
                                  className="input-15"
                                  label
                                  text="Appointment Date"
                                  text1="Nov 14, 2021"
                                  visible2={false}
                                />
                                <Input
                                  className="input-15"
                                  label
                                  text="Special Instructions"
                                  text1="Leave a special instructions"
                                  visible2={false}
                                  visible3={false}
                                />
                                <div className="div-12">
                                  <Input
                                    className="input-16"
                                    label
                                    text="Room Access"
                                    text1="Keys with doorman"
                                    visible2={false}
                                  />
                                  <Input
                                    className="input-16"
                                    label
                                    text="Price ($)"
                                    text1="5000"
                                    visible2={false}
                                    visible3={false}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="action-11">
                              <div className="progress-17">
                                <div className="text-wrapper-255">Progress</div>

                                <Input
                                  className="progress-18"
                                  label={false}
                                  text1="In Progress"
                                  visible={false}
                                />
                              </div>

                              <div className="action-12">
                                <Button
                                  className="button-15"
                                  style="primary"
                                  text="Done"
                                  type="default"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="btn-8">
                        <div className="overlap-152">
                          <div className="btn-bg-10">
                            <div className="btn-bg-11" />
                          </div>

                          <div className="text-wrapper-256">
                            Enter Message...
                          </div>
                        </div>
                      </button>

                      <div className="line-108" />
                    </div>
                  </div>

                  <div className="chat-conversation-3">
                    <div className="overlap-153">
                      <div className="msg-15">
                        <img
                          className="rectangle-34"
                          alt="Rectangle"
                          src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle.svg"
                        />

                        <div className="overlap-154">
                          <div className="img-copy-3">
                            <div className="overlap-group-42">
                              <img
                                className="img-8"
                                alt="Img"
                                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/img-3.png"
                              />
                            </div>
                          </div>

                          <div className="img-9">
                            <div className="overlap-group-42">
                              <img
                                className="img-8"
                                alt="Img"
                                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/img-4.png"
                              />
                            </div>
                          </div>

                          <div className="text-wrapper-257">10:00</div>

                          <div className="text-wrapper-258">John Howard</div>
                        </div>

                        <div className="ellipsis-v-13" />
                      </div>

                      <div className="msg-16">
                        <div className="overlap-155">
                          <div className="bg-14" />

                          <img
                            className="rectangle-35"
                            alt="Rectangle"
                            src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-4.svg"
                          />

                          <div className="wow-that-s-great-3">
                            se murio chiwis
                          </div>

                          <div className="text-wrapper-259">10:02</div>

                          <div className="marcus-3">gorylove</div>
                        </div>

                        <div className="ellipsis-v-14" />
                      </div>

                      <div className="msg-17">
                        <img
                          className="rectangle-34"
                          alt="Rectangle"
                          src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-1.svg"
                        />

                        <div className="overlap-156">
                          <div className="text-wrapper-260">
                            Next meeting tomorrow 10.00AM
                          </div>

                          <div className="text-wrapper-261">10:04</div>

                          <div className="text-wrapper-262">Galen Rizo</div>
                        </div>

                        <div className="ellipsis-v-15" />
                      </div>

                      <div className="msg-18">
                        <img
                          className="rectangle-34"
                          alt="Rectangle"
                          src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-2.svg"
                        />

                        <div className="overlap-157">
                          <p className="text-wrapper-263">
                            What about our next meeting?
                          </p>

                          <div className="text-wrapper-261">10:04</div>

                          <div className="text-wrapper-262">Galen Rizo</div>
                        </div>

                        <div className="ellipsis-v-16" />
                      </div>

                      <div className="msg-19">
                        <img
                          className="rectangle-34"
                          alt="Rectangle"
                          src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-5.svg"
                        />

                        <div className="overlap-158">
                          <div className="text-wrapper-260">Hello!</div>

                          <div className="text-wrapper-261">10:04</div>

                          <div className="text-wrapper-262">Galen Rizo</div>
                        </div>

                        <div className="ellipsis-v-17" />
                      </div>

                      <div className="msg-20">
                        <div className="overlap-159">
                          <div className="bg-15" />

                          <img
                            className="rectangle-36"
                            alt="Rectangle"
                            src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-4-1.svg"
                          />

                          <div className="text-wrapper-264">
                            Good morning everyone !
                          </div>

                          <div className="text-wrapper-265">10:02</div>

                          <div className="text-wrapper-266">Marcus</div>
                        </div>

                        <div className="ellipsis-v-14" />
                      </div>

                      <div className="msg-21">
                        <img
                          className="rectangle-34"
                          alt="Rectangle"
                          src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-6.svg"
                        />

                        <div className="overlap-160">
                          <div className="text-wrapper-260">
                            Good morning everyone !
                          </div>

                          <div className="text-wrapper-257">10:00</div>

                          <div className="text-wrapper-258">John Howard</div>
                        </div>

                        <div className="ellipsis-v-18" />
                      </div>

                      <div className="overlap-161">
                        <div className="line-109" />

                        <button className="btn-9">
                          <div className="overlap-162">
                            <div className="text-wrapper-267">Today</div>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="line-110" />

                    <div className="topbar-3">
                      <div className="overlap-163">
                        <div className="ellipsis-h-5" />

                        <div className="search-11" />

                        <div className="text-wrapper-268">12 Members</div>

                        <div className="users-alt-5" />

                        <div className="designers-7">Campaign Content</div>
                      </div>
                    </div>
                  </div>

                  <div className="left-card-3">
                    <div className="overlap-164">
                      <img
                        className="card-6"
                        alt="Card"
                        src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/card-2.svg"
                      />

                      <div className="bg-16" />

                      <div className="contacts-3">
                        <div className="user-25">
                          <div className="overlap-165">
                            <div className="text-wrapper-269">04 Hrs</div>

                            <div className="text-wrapper-270">Vernon Smith</div>

                            <div className="user-26">
                              <div className="overlap-group-43">
                                <div className="bg-17" />

                                <div className="rectangle-37" />

                                <div className="text-wrapper-271">V</div>
                              </div>
                            </div>
                          </div>

                          <div className="line-111" />
                        </div>

                        <div className="user-27">
                          <div className="overlap-165">
                            <div className="text-wrapper-272">01 Hr</div>

                            <div className="text-wrapper-273">Annie Holder</div>

                            <div className="user-28">
                              <div className="overlap-group-44">
                                <img
                                  className="img-10"
                                  alt="Img"
                                  src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/img@2x.png"
                                />

                                <div className="rectangle-38" />
                              </div>
                            </div>
                          </div>

                          <div className="line-111" />
                        </div>

                        <div className="user-29">
                          <div className="overlap-165">
                            <div className="text-wrapper-274">22 min</div>

                            <div className="text-wrapper-275">
                              Bernard Spencer
                            </div>

                            <div className="user-28">
                              <div className="overlap-group-44">
                                <img
                                  className="img-10"
                                  alt="Img"
                                  src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/img-1@2x.png"
                                />

                                <div className="rectangle-39" />
                              </div>
                            </div>
                          </div>

                          <div className="line-111" />
                        </div>

                        <div className="user-30">
                          <div className="overlap-165">
                            <div className="badge-3">
                              <div className="overlap-group-45">
                                <div className="text-wrapper-276">01</div>
                              </div>
                            </div>

                            <div className="text-wrapper-277">10 min</div>

                            <div className="text-wrapper-278">Galen Rizo</div>

                            <div className="user-26">
                              <div className="overlap-group-43">
                                <div className="bg-17" />

                                <div className="rectangle-37" />

                                <div className="text-wrapper-279">G</div>
                              </div>
                            </div>
                          </div>

                          <div className="line-111" />
                        </div>

                        <div className="overlap-166">
                          <div className="overlap-167">
                            <div className="user-31">
                              <div className="overlap-165">
                                <div className="text-wrapper-274">02 min</div>

                                <div className="text-wrapper-280">
                                  John Howard
                                </div>

                                <div className="user-28">
                                  <div className="overlap-group-44">
                                    <img
                                      className="img-10"
                                      alt="Img"
                                      src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/img-2@2x.png"
                                    />

                                    <div className="rectangle-37" />
                                  </div>
                                </div>
                              </div>

                              <div className="line-111" />
                            </div>

                            <div className="text-wrapper-281"> New Group</div>

                            <div className="plus-4">
                              <img
                                className="plus-5"
                                alt="Plus"
                                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/plus-4@2x.png"
                              />
                            </div>
                          </div>

                          <div className="text-wrapper-282">Contacts</div>

                          <div className="user-32" />
                        </div>

                        <div className="line-112" />
                      </div>

                      <div className="groups-3">
                        <div className="overlap-168">
                          <div className="meeting-3">
                            <div className="overlap-group-46">
                              <div className="text-wrapper-283">Meeting</div>

                              <div className="user-33">
                                <div className="div-13" />
                              </div>
                            </div>
                          </div>

                          <div className="designers-8">
                            <div className="overlap-169">
                              <div className="designers-9">
                                Campaign Content
                              </div>

                              <div className="user-33">
                                <div className="div-13" />
                              </div>
                            </div>
                          </div>

                          <div className="overlap-170">
                            <div className="overlap-171">
                              <div className="general-3">
                                <div className="overlap-172">
                                  <div className="text-wrapper-284">
                                    General
                                  </div>

                                  <div className="user-34">
                                    <div className="overlap-group-47">
                                      <div className="text-wrapper-279">G</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="text-wrapper-281"> New Group</div>

                              <div className="plus-4">
                                <img
                                  className="plus-5"
                                  alt="Plus"
                                  src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/plus-5@2x.png"
                                />
                              </div>
                            </div>

                            <div className="text-wrapper-285">Groups</div>

                            <div className="users-alt-6" />
                          </div>

                          <div className="line-112" />
                        </div>
                      </div>

                      <div className="search-12">
                        <div className="overlap-173">
                          <div className="bg-18" />

                          <div className="text-wrapper-286">Search...</div>

                          <div className="search-13" />
                        </div>
                      </div>

                      <div className="user-35">
                        <div className="overlap-174">
                          <div className="text-wrapper-287">Available</div>

                          <div className="ellipsis-h-6" />

                          <div className="circle-4">
                            <img
                              className="circle-5"
                              alt="Circle"
                              src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/circle@2x.png"
                            />
                          </div>

                          <div className="text-wrapper-288">Marcus</div>

                          <img
                            className="user-36"
                            alt="User"
                            src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/user@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="rectangle-40"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/rectangle-1739.png"
              />

              <img
                className="image-22"
                alt="Image"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f5f9e0a1ef88816a121b97/img/image-13.png"
              />

              <img
                className="comment-9"
                alt="Comment"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/comment.svg"
              />

              <SocialConnectionUser11
                className="social-connection-user-2"
                color="#848484"
              />
              <FinanceSecurityBank2
                className="finance-security-bank-7"
                color="#848484"
              />
              <img
                className="notification-9"
                alt="Notification"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/notification@2x.png"
              />

              <FinanceSecurityIdCard1
                className="finance-security-id-card-4-instance"
                color="#848484"
              />
              <img
                className="line-113"
                alt="Line"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/line-254.svg"
              />

              <img
                className="line-114"
                alt="Line"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/line-254.svg"
              />

              <img
                className="line-115"
                alt="Line"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/line-254.svg"
              />

              <img
                className="line-116"
                alt="Line"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/line-254.svg"
              />

              <img
                className="line-117"
                alt="Line"
                src="https://cdn.animaapp.com/projects/67f56811c32b493e71bc8ca0/releases/67f70d2c71d63f2aaae2edd1/img/line-254.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
