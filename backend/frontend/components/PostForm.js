import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import SelectChain from "./SelectChain";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PostForm = () => {
  return (
    <div className="row">
      <div className="col-md-9 col-sm-10 mx-auto">
        <form>
          <TextField
            id="standard-full-width"
            name="post[title]"
            placeholder="タイトル"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-multiline-static"
            className="mt-4"
            name="post[body]"
            placeholder="本文"
            multiline
            fullWidth
            rows={18}
            variant="filled"
          />
          <SelectChain />
          <Slider
            className="mt-4"
            name="post[completed_rate]"
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            defaultValue={20}
          />
          <div className="d-flex justify-content-between mt-4">
            <div>
              <i class="fas fa-graduation-cap"></i>
              <span className="text-muted ml-4">習熟度 80%</span>
            </div>
            <Button variant="contained" color="primary">
              記録する
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default PostForm;
