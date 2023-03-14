/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { forwardRef, useState } from "react";
import Globals, { _t } from "../../Ressources/Globals";
import React from "react";
import "./date.css";
import { Col, Row } from "react-bootstrap";
import { IoCheckmarkCircle } from "react-icons/io5";
import DatePicker from "react-datepicker";
import GlobalWorker from "../../Ressources/GlobalWorker";
import { getDay, getDayOfYear } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

import dayjs from "dayjs";
import "dayjs/locale/fr";
dayjs.locale("fr");

const DateComponent = (props) => {
  const { triggerNextStep, meta } = props;

  const date = new Date();
  const [startDate, setStartDate] = useState(date);
  const [showDate, setshowDate] = useState(false);
  const [triggered, settriggered] = useState(false);
  const onDateChange = (date) => {
    setshowDate(true);
    setStartDate(date);
    GlobalWorker.setCurrentData(meta, date.toISOString());
  };

  React.useEffect(() => {
    return () => {};
  }, []);

  function triggetNext() {
    settriggered(true);
    triggerNextStep();
  }
  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return (
      <span title={tooltipText} className="text-mulish">
        {day}
      </span>
    );
  };
  const spring = React.useMemo(
    () => ({
      type: "spring",
      damping: 50,
      stiffness: 100,
    }),
    []
  );
  const isWeekday = (date) => {
    const day = getDay(date);
    const dayy = getDayOfYear(date);
    return day !== 0 && day !== 6 && dayy % 2 === 0;
  };

  const PickerWithTime = forwardRef((data, ref) => {
    let { value, onClick } = data;
    return (
      <button
        className="date-custom-input  col-10 px-0"
        onClick={onClick}
        ref={ref}
      >
        {dayjs(startDate).format("DD MMMM YYYY, HH:mm")}
      </button>
    );
  });

  const PickerSimple = forwardRef((data, ref) => {
    let { value, onClick } = data;
    return (
      <button
        className="date-custom-input col-10 px-0"
        onClick={onClick}
        ref={ref}
      >
        {dayjs(startDate).format("DD MMMM YYYY")}
      </button>
    );
  });

  return (
    <div
      style={{
        borderRadius: triggered ? "10px" : "",
      }}
      className="sweet-loading position-relative col-12 "
    >
      {triggered && <div className="component-blender"></div>}

      <div className="logined-component">
        <Row className="align-items-center position-relative justify-content-end flex-nowrap">
          <Col className="col-10 px-0 ">
            {meta == "avalability_date" ? (
              <DatePicker
                selected={startDate}
                showTimeSelect
                filterDate={isWeekday}
                onChange={(e) => {
                  console.log(e.toISOString());
                  onDateChange(e);
                }}
                minDate={date}
                formatWeekDay={(day) => day.slice(0, 3)}
                dateFormat="dd MMMM yyyy"
                renderDayContents={renderDayContents}
                className={`re-input pass-input form-control shadow-none mt-2  border-0 rounded-0 ${
                  triggered ? "bg-primary text-light " : "border-bottom"
                } `}
                customInput={<PickerWithTime />}
                wrapperClassName="text-end"
                timeFormat="p"
                locale="fr-FR"
                timeIntervals={60}
              />
            ) : (
              <DatePicker
                selected={startDate}
                onChange={onDateChange}
                minDate={date}
                formatWeekDay={(day) => day.slice(0, 3)}
                dateFormat="MMMM d, yyyy h:mm aa"
                style={{
                  backgroundColor: triggered ? Globals.COLORS.primary : null,
                }}
                className={`re-input pass-input form-control shadow-none mt-2  border-0 rounded-0 ${
                  triggered ? "bg-primary text-light " : "border-bottom"
                } `}
                customInput={<PickerSimple />}
              />
            )}
          </Col>
          {showDate && !triggered && (
            <AnimatePresence>
              <motion.div
                layoutTransition={spring}
                key={"validate"}
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: showDate && !triggered ? 1 : 0,
                  width: showDate && !triggered ? "10%" : 0,
                }}
                exit={{ opacity: 0 }}
                className="col-1 px-0 position-relative validate-icon-container"
              >
                <button
                  onClick={(e) => {
                    triggetNext();
                  }}
                  className="btn-dark bg-light border-0"
                >
                  <IoCheckmarkCircle size={20} color="green" />
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </Row>
      </div>
    </div>
  );
};

export default DateComponent;
