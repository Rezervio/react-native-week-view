import { StyleSheet } from 'react-native';

const GREY_COLOR = '#E9EDF0';
const LIGHT_COLOR = '#FFF';
const ROW_HEIGHT = 40;
export const CONTENT_OFFSET = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLineContainer: {
    flexDirection: 'row',
  },
  timeRow: {
    flex: 0,
    height: ROW_HEIGHT,
  },
  timeLabelLine: {
    height: 1,
    backgroundColor: GREY_COLOR,
    position: 'absolute',
    right: 0,
    left: 10,
  },
  timeColumn: {
    flex: -1,
    paddingTop: 10,
    width: 40,
  },
  timeLabel: {
    flex: -1,
    height: 40,
  },
  timeText: {
    fontSize: 12,
    textAlign: 'center',
  },
  event: {
    flex: 1,
    overflow: 'hidden',
  },
  eventColumn: {
    flex: 1,
    paddingTop: CONTENT_OFFSET,
    backgroundColor: LIGHT_COLOR,
  },
  scheduleItems: {
    position: 'absolute',
    flexDirection: 'row',
    left: 20,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
});

export default styles;