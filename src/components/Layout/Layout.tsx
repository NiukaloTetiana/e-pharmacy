import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header, Loader, ScrollUpButton } from "../../components";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollUpButton />
      </main>

      <Footer />
    </div>
  );
};
