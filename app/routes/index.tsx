import type { MetaFunction } from "remix";
import NavBar from "~/components/navbar";

export let meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "Come see what Zach Taylor has to offer.",
  };
};

export default function Index() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
