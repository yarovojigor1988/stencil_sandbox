import { assert } from 'chai'; // eslint-disable-line import/extensions

import enable from '../src/enable.js';
import displayImage from '../src/displayImage.js';
import { getEnabledElement } from '../src/enabledElements.js';
import setViewport from '../src/setViewport.js';
import pixelToCanvas from '../src/pixelToCanvas.js';
import disable from '../src/disable.js';

describe('pixelToCanvas', function () {
  beforeEach(function () {
    // Arrange
    this.element = document.createElement('div');
    const height = 256;
    const width = 128;

    const getPixelData = () => new Uint8Array([0, 255, 255, 0]);

    // setting up image with non-square pixels to test conversion
    this.image = {
      imageId: 'exampleImageId',
      minPixelValue: 0,
      maxPixelValue: 255,
      slope: 1.0,
      intercept: 0,
      windowCenter: 127,
      windowWidth: 256,
      getPixelData,
      rows: height,
      columns: width,
      height,
      width,
      color: false,
      columnPixelSpacing: 1.0,
      rowPixelSpacing: 0.5,
      sizeInBytes: width * height * 2
    };

    this.viewport = {
      scale: 1.0,
      translation: {
        x: 0,
        y: 0
      },
      voi: {
        windowWidth: 256,
        windowCenter: 127
      },
      invert: false,
      pixelReplication: false,
      rotation: 0,
      hflip: false,
      vflip: false
    };

  });

  it('should convert points in the canvas coordinate system to equivalent points in the pixel coordinate system', function () {
    // Arrange
    enable(this.element);
    displayImage(this.element, this.image);

    const element = this.element;
    const enabledElement = getEnabledElement(this.element);

    enabledElement.canvas.width = 256;
    enabledElement.canvas.height = 256;

    setViewport(element, this.viewport);

    // Act
    const convertedPoint1 = pixelToCanvas(element, {
      x: 30,
      y: 30 });
    const convertedPoint2 = pixelToCanvas(element, {
      x: 0,
      y: 0 });
    const convertedPoint3 = pixelToCanvas(element, {
      x: 0,
      y: 128 });

    assert.deepEqual(convertedPoint1, {
      x: 60,
      y: 30 });
    assert.deepEqual(convertedPoint2, {
      x: 0,
      y: 0 });
    assert.deepEqual(convertedPoint3, {
      x: 0,
      y: 128 });
  });

  afterEach(function () {
    disable(this.element);
  });
});
