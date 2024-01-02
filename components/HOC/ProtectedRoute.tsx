import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = <P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const token = localStorage.getItem("token");

        if (!token) {
          router.replace("/login");
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedRoute;
