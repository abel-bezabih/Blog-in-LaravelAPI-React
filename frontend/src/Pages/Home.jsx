//export default function Home() {
  //  return (
    //    <div>
      //      <h1>Welcome to my Blog</h1>
        //    <p>Chek out my latest posts below!</p>
          //  </div>
    //);
//}

import { Index as Posts } from "../Pages/Posts/Index";

export default function Home() {
    return (
        <div>
            <h1 className="my-5 text-xl font-semibold text-center">
                Welcome to My Blog
            </h1>
            <Posts />
        </div>
    );
}