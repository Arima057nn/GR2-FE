"use client";
import { useRouter } from "next/navigation";
import { ComponentType, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const withUserAuth = (WrappedComponent: ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { user } = useContext(UserContext);

    useEffect(() => {
      if (!user) {
        router.push("/login");
      } else if (user && user.role !== 3) {
        router.back();
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withUserAuth;
