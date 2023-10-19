import * as React from "react";
import cn from "classnames";
import { Whatsapp } from "./icons/wa";

type SocialMediaProps = {
  heightThreshold?: number;
};

export const SocialMedia: React.FC<SocialMediaProps> = ({
  heightThreshold = 100,
}) => {
  const [showScroll, setShowScroll] = React.useState<boolean>(false);
  const checkScrollTop = React.useCallback(() => {
    if (!showScroll && window.pageYOffset > heightThreshold) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= heightThreshold) {
      setShowScroll(false);
    }
  }, [showScroll, heightThreshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  return (
    <div
      className={cn(
        showScroll ? "inline-flex" : "hidden",
        "fixed bottom-40 right-2 h-12 sm:h-20 w-auto items-center justify-center p-2 border border-transparent rounded-full bg-bsd-dark/50 text-bsd-light space-x-4 ",
      )}
    >
      <div className="sm:py-2">
        <a
          href={"https://wa.link/xyye05"}
          rel="noopener noreferrer"
          target="_blank"
        >
          {React.createElement(
            Whatsapp,
            {
              width: "56px",
              height: "56px",
              fill: "#00E676",
            },
            cn(" sm:w-12 sm:h-12"),
          )}
        </a>
      </div>
    </div>
  );
};
