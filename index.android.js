// TODO: check out https://github.com/abangfadli/shotwatch

import { NativeModules } from 'react-native'

const { RNScreenshotDetector } = NativeModules

const unsubscribe = () => {}
const subscribe = () => unsubscribe

const disableScreenshots = () => {
  if (RNScreenshotDetector && RNScreenshotDetector.disableScreenshots) {
    RNScreenshotDetector.disableScreenshots()
  }
}

const enableScreenshots = () => {
  if (RNScreenshotDetector && RNScreenshotDetector.enableScreenshots) {
    RNScreenshotDetector.enableScreenshots()
  }
}

const Detector = {
  subscribe,
  disableScreenshots,
  enableScreenshots,
}

export default Detector
