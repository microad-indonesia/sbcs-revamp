/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Cards } from "./cards";
import {
  Assisting,
  Strategy,
  Information,
  Introduction,
  Consultation,
  BusinessMatching,
} from "~/components/ui/icons";

const images = [
  {
    icons: Assisting,
    title: "Assisting",
    desc: "Assist new clients to establish business in Indonesia.",
  },
  {
    icons: Strategy,
    title: "Strategy",
    desc: "Assist existing clients for new business strategy or expansion plan.",
  },
  {
    icons: Information,
    title: "Information",
    desc: "Provide the latest information regarding Indonesia in politics, economy, industry, and regulation.",
  },
  {
    icons: Introduction,
    title: "Introduction",
    desc: "Introduce clients to investment – related institutions & companies such as investment  boards, law firms, rental office, and other  similar institutions or companies.",
  },
  {
    icons: Consultation,
    title: "Consultation",
    desc: "Provide various consultation & advisory to clients regarding investment climate, business strategy, and expansion plan.",
  },
  {
    icons: BusinessMatching,
    title: "Business Matching",
    desc: "Support clients to find potential partners for distribution, joint operation, etc based on clients’ inquiries.",
  },
];

export class SliderContainer extends Component {
  // eslint-disable-next-line no-undef
  [x: string]: any;
  constructor(props: any) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    activeSlide: 0,
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      afterChange: (current: any) => this.setState({ activeSlide: current }),
      infinite: false,
      speed: 500,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="mx-8 md:mx-0 col md:col-span-0 lg:col-span-2 overflow-hidden">
        <div className=" mx-8 md:mx-16 my-8 flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <span className="not-sr-only md:sr-only">
              {this.state.activeSlide === 0 ? 1 : this.state.activeSlide + 1}
            </span>
            <span className="sr-only md:not-sr-only">
              {this.state.activeSlide === 0
                ? 1
                : this.state.activeSlide === 3
                ? 6
                : this.state.activeSlide}
            </span>
            <hr className="h-1 bg-sbcs-dark w-8" />
            <span>{images?.length}</span>
          </div>
          <div className="flex gap-4">
            <button
              className="p-4 md:p-[17px] ring-2 ring-sbcs-dark hover:bg-sbcs-dark hover:text-sbcs-light"
              onClick={this.previous}
            >
              <ArrowLeftIcon height={24} width={24} />
            </button>
            <button
              className="p-4 md:p-[17px] ring-2 ring-sbcs-dark hover:bg-sbcs-dark hover:text-sbcs-light"
              onClick={this.next}
            >
              <ArrowRightIcon height={24} width={24} />
            </button>
          </div>
        </div>
        <Slider ref={(c: any) => (this.slider = c)} {...settings}>
          {images?.map((val: any, index: number) => (
            <div key={`${index}`} className="flex-1 py-4 ">
              <Cards
                source={val?.icons}
                title={val?.title}
                description={val.desc}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

// disable components for hiding btn
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
