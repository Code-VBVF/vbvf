import {
  AlertBubble,
  Spinner_default,
  button_default,
  getOrdinalNum,
  livestreamHappeningNow,
  nthSundayHasCome,
  nthWeekdayOfMonth,
  sanity,
  sanityUrlFor
} from "/build/_shared/chunk-53U3UFXW.js";
import "/build/_shared/chunk-5SZMQSL6.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-JUKOGOL5.js";

// browser-route-module:/Users/mitch/code/vbvf/app/routes/index.js?browser
init_react();

// app/routes/index.js
init_react();
var import_react2 = __toESM(require_react());

// app/old-app/styles/css/home.css
var home_default = "/build/_assets/home-E7D2C3XE.css";

// app/old-app/styles/css/preview.css
var preview_default = "/build/_assets/preview-6VHL5XBX.css";

// app/old-app/images/home_page/bible-teaching.jpg
var bible_teaching_default = "/build/_assets/bible-teaching-NO3BCHLX.jpg";

// app/old-app/images/home_page/daily_bread.jpeg
var daily_bread_default = "/build/_assets/daily_bread-QK5ET6X7.jpeg";

// app/old-app/images/home_page/MeetandGreet.jpg
var MeetandGreet_default = "/build/_assets/MeetandGreet-YCIBVBIT.jpg";

// app/old-app/images/home_page/anthony_baptism_horizontal_c.jpg
var anthony_baptism_horizontal_c_default = "/build/_assets/anthony_baptism_horizontal_c-PRQDR3A7.jpg";

// app/old-app/components/preview.js
init_react();
var import_react = __toESM(require_react());
function Preview(props) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "preview"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: props.image,
    alt: ""
  }), /* @__PURE__ */ import_react.default.createElement("h4", null, props.title), /* @__PURE__ */ import_react.default.createElement("p", null, props.body), /* @__PURE__ */ import_react.default.createElement(button_default, {
    size: "medium",
    color: props.color ? props.color : "green",
    link: props.link,
    title: props.buttonTitle
  }));
}

// app/routes/index.js
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var BAPTISM_WEEK_NUM = 3;
var liveStreamButtonText = () => {
  if (livestreamHappeningNow()) {
    return "View livestream";
  } else {
    return "View past services";
  }
};
var links = () => {
  return [
    { rel: "stylesheet", href: home_default },
    { rel: "stylesheet", href: preview_default }
  ];
};
var Home = () => {
  console.log("home is rendering");
  const query = `{'pageData': *[_type == "page" && title == "Home"]{
    paragraphs,
    scripture,
    ministryLeader->
  }, 'childrensUnits': *[_type == "childrensUnit"] |order(_createdAt desc)[0...3]{
    title,
    unitNumber,
    seriesImage,
  }}`;
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return /* @__PURE__ */ import_react2.default.createElement("a", {
          href
        }, children);
      },
      list: (props) => {
        const { type } = props;
        const bullet = type === "bullet";
        if (bullet) {
          return /* @__PURE__ */ import_react2.default.createElement("ul", null, props.children);
        }
        return /* @__PURE__ */ import_react2.default.createElement("ol", null, props.children);
      },
      listItem: (props) => /* @__PURE__ */ import_react2.default.createElement("li", null, props.children)
    }
  };
  const [pageData, setPageData] = (0, import_react2.useState)([]);
  const [childrensUnits, setChildrensUnits] = (0, import_react2.useState)();
  const [pageDataIsLoading, setPageDataIsLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    sanity.fetch(query).then((result) => {
      setChildrensUnits(result.childrensUnits);
      setPageData(result.pageData);
      setPageDataIsLoading(!pageDataIsLoading);
    });
  }, [query]);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "home"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "main-header"
  }, /* @__PURE__ */ import_react2.default.createElement(AlertBubble, null), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "main-header-titles"
  }, /* @__PURE__ */ import_react2.default.createElement("h1", null, "Find Joy in the Word"), /* @__PURE__ */ import_react2.default.createElement("h2", null, "John 1:1"), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "main-header-buttons"
  }, /* @__PURE__ */ import_react2.default.createElement(button_default, {
    link: "/livestream",
    title: liveStreamButtonText(),
    size: "large",
    color: "bone"
  }), /* @__PURE__ */ import_react2.default.createElement(button_default, {
    title: "Attend a service",
    link: "/attend",
    size: "large",
    color: "bone"
  })))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "preview-container"
  }, nthSundayHasCome(BAPTISM_WEEK_NUM) ? /* @__PURE__ */ import_react2.default.createElement(Preview, {
    title: "Bible Teaching",
    body: "Listen to all sermons and bible studies online.",
    buttonTitle: "Listen to Bible teaching",
    link: "/bible-studies/",
    image: bible_teaching_default
  }) : /* @__PURE__ */ import_react2.default.createElement(Preview, {
    title: "Get Baptized",
    body: `Verse by Verse Fellowship celebrates baptisms every month. If you've never been baptized, consider doing so with us this month on ${monthNames[new Date().getMonth()]} the ${getOrdinalNum(nthWeekdayOfMonth(0, BAPTISM_WEEK_NUM).getDate())}.`,
    buttonTitle: "Register for Baptism",
    link: "https://vbvf.churchcenter.com/registrations/events/1154578",
    image: anthony_baptism_horizontal_c_default
  }), /* @__PURE__ */ import_react2.default.createElement(Preview, {
    title: "Announcements",
    body: "Check out what's happening at Verse by Verse Fellowship.",
    buttonTitle: "View Announcements",
    link: "/announcements",
    image: daily_bread_default
  }), /* @__PURE__ */ import_react2.default.createElement(Preview, {
    title: "Connect with us",
    body: "Hear about our vision, beliefs and how you can join in our\n              journey. Visit our Connect Page to learn how you can make VBVF\n              your church.",
    buttonTitle: "Learn more",
    link: "/connect",
    image: MeetandGreet_default
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "childrens-content"
  }, pageDataIsLoading ? /* @__PURE__ */ import_react2.default.createElement(Spinner_default, null) : /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("h3", null, "Check out our latest kids content!"), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "childrens-content-preview"
  }, childrensUnits?.map((unit) => /* @__PURE__ */ import_react2.default.createElement(Preview, {
    title: unit.title,
    buttonTitle: "Watch now",
    color: "gold",
    link: `/childrens-content/unit-${unit.unitNumber}`,
    image: sanityUrlFor(unit.seriesImage).width(450)
  }))))));
};
var routes_default = Home;
export {
  routes_default as default,
  links
};
//# sourceMappingURL=/build/routes/index-U2MGMF2W.js.map
