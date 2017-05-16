import VideoFrameChecker from 'webrtc-troubleshoot/utils/video-frame-checker';
import { module, test } from 'qunit';

module('Unit | Utility | video frame checker');

test('it works', function (assert) {
  const video = document.createElement('video');
  let checker = new VideoFrameChecker(video);
  assert.ok(typeof checker.checkVideoFrame === 'function');
});
