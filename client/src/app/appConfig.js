// some Settings:
angular.module('app').constant('appConfig', {
  // TIMESTAMP:
  // represents the name of the column with timestamp/x-data;
  // if field timestamp is used, try parsing as data, or numeric, or fallback to iteration.
  TIMESTAMP : "timestamp",
  // EXCLUDE_FIELDS:
  // used to ignore some fields completely, not showing them as possibilities in graph plots.
  EXCLUDE_FIELDS : [],
  // HEADER_SKIPPED_ROWS:
  // number of rows (between 2nd .. Nth, included) skipped.
  // For OPF this must be >= 2 (as 2nd row is 'float,float,float', 3rd: ',,' metadata)
  // You can increase this (to about 2000) to skip untrained HTM predictions at the beginning
  // (eg. data where anomalyScore = 0.5 at the start).
  // Warning: default 2 is used, so for non-OPF data you lose the first 2 data points
  // (we find that acceptable).
  HEADER_SKIPPED_ROWS : 2,
  // ZOOM:
  // toggle 2 methods of zooming in the graph: "RangeSelector", "HighlightSelector" (=mouse)
  ZOOM : "HighlightSelector",
  // NONE_VALUE_REPLACEMENT:
  // used to fix a "bug" in OPF, where some columns are numeric
  // (has to be determined at the last row), but their first few values are "None".
  // We replace the with this value, defaults to 0.
  NONE_VALUE_REPLACEMENT : 0,
  // BUFFER:
  // buffer size used for DyGraph streaming, default 1000
  BUFFER_SIZE : 1000,
  // SLIDING_WINDOW:
  // True = each batch existing values are dropped, new BUFFER_SIZE is painted. Graph will "move to the right".
  // False = data never dropped, just append. Graph will "shrink". (default)
  SLIDING_WINDOW : false,
  // LOCAL_CHUNK_SIZE:
  // size in bytes of each chunk for the data stream, when reading local files
  LOCAL_CHUNK_SIZE : 65536,
  // REMOTE_CHUNK_SIZE:
  // size in bytes of each chunk for the data stream, when reading files over a network. Not currently used.
  REMOTE_CHUNK_SIZE : 65536
});
