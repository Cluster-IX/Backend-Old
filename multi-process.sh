#!/bin/env bash

for i in {1..500}; do
  node result.js $i &>/dev/null &
done
