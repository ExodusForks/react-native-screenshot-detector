import { NativeModules } from 'react-native'

const LINKING_ERROR =
  `@exodus/react-native-screenshot-detector: native module 'RNScreenshotDetector' is not linked. ` +
  `Rebuild the Android app from source so the native module is bundled. ` +
  `Refusing to no-op for security-critical screenshot protection.`

const { RNScreenshotDetector } = NativeModules

const unsubscribe = () => {}
const subscribe = () => unsubscribe

const disableScreenshots = () => {
  if (!RNScreenshotDetector || !RNScreenshotDetector.disableScreenshots) {
    throw new Error(LINKING_ERROR)
  }
  RNScreenshotDetector.disableScreenshots()
}

const enableScreenshots = () => {
  if (!RNScreenshotDetector || !RNScreenshotDetector.enableScreenshots) {
    throw new Error(LINKING_ERROR)
  }
  RNScreenshotDetector.enableScreenshots()
}

const Detector = {
  subscribe,
  disableScreenshots,
  enableScreenshots,
}

export default Detector
