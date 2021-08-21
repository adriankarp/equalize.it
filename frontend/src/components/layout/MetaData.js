/* eslint-disable react/prop-types */
import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - equalize.it`}</title>
    </Helmet>
  );
};

export default MetaData;
