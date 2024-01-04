import CheckTokenEffect from "@/Helpers/Effects/CheckTokenEffect";
import { getToken } from "@/utils/token";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    return (
      <CheckTokenEffect>
        <WrappedComponent {...props} />
      </CheckTokenEffect>
    );
  };

  return Wrapper;
};

export default ProtectedRoute;
