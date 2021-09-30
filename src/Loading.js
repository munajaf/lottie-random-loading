import _ from "underscore";
import Lottie from "lottie-react";
import * as loading1 from "./animation/loading1.json";
import * as loading2 from "./animation/loading2.json";
import * as loading3 from "./animation/loading3.json";
import * as loading4 from "./animation/loading4.json";

const Loading = ({ refresh }) => {
  const animation = [loading1, loading2, loading3, loading4];
  const dataLength = animation.length - 1;

  const randomLoading = () => {
    let randomNumber = _.random(0, dataLength);

    return animation[randomNumber];
  };

  return (
    <div>
      <Lottie animationData={randomLoading()} />
    </div>
  );
};

export default Loading;
