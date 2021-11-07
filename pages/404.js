import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ooops...</h1>
      <h2>Essa página não existe :(</h2>
      <p>
        Voltando para a{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        em 3 segundos...
      </p>
    </div>
  );
};

export default NotFound;
