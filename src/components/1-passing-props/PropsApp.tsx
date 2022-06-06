import React from "react";
import faker from "@faker-js/faker";
import PropsCard, { PropsCardUser } from "./PropsCard";
import PropsCardCommentDetail from "./PropsCardCommentDetail";

type Props = {};

const PropsApp = (props: Props) => {
  const getDummyUser = (): PropsCardUser => {
    return {
      avatar: faker.image.avatar(),
      author: faker.name.firstName(),
      date: faker.date.recent().toDateString(),
      postTitle: faker.company.companyName(),
    };
  };

  const dummyArray: number[] = Array.from(Array(5).keys());

  return (
    <div>
      {dummyArray.map((key: number) => {
        let dummyUser: PropsCardUser = getDummyUser();
        return (
          <div className="ui container comments" key={key}>
            <PropsCard user={dummyUser}>
              <PropsCardCommentDetail user={dummyUser}></PropsCardCommentDetail>
            </PropsCard>
          </div>
        );
      })}
    </div>

    // <div>
    //   {dummyArray.map((key: number) => {
    //     let dummyUser: PropsCardUser = getDummyUser();
    //     return (
    //       <div className="ui container comments" key={key}>
    //         <PropsCard user={dummyUser} >
    //           <PropsCardCommentDetail user={dummyUser}></PropsCardCommentDetail>
    //         </PropsCard>
    //       </div>
    //     )
    //   }}
    // </div>
  );
};

export default PropsApp;
