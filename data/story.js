var stories = [
    // 1
    'This visualization works best in 1280x800 or larger screen sizes on WebGL webgl supported browsers.\n\nPlease "click" to advance.',
    // 2
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
    // 3
    '',
    // 4
    'Lightning',
    // 5
    'story 4',
    // 6
    'story 5',
    // 7
    'story 6'
];

var params = [
    // 1
    {
        'changeState': true,
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m'],
        'colVals': ['1'],
        'cellVal': '2',
    },
    // 2
    {
        'changeState': true,
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m'],
        'colVals': ['1'],
        'cellVal': '2',
        'translation': [0.2, 0.2, 0.0],
        'scale': 1.5
    },
    // 3
    {
        'changeState': true,
        'image': 'data/img/sample.png',
        'imageScale': 0.8, // optional, default is 1.0. relative size with canvas area
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m', 'f'],
        'colVals': ['1'],
        'cellVal': '2'
    },
    // 4
    {
        'changeState': true, // if changeState == false, other info is optional
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m', 'f'],
        'colVals': ['3', '4', '5'],
        'cellVal': '2',
    },
    // 5
    {
        'changeState': false, // if changeState == false, other info is optional
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m', 'f'],
        'colVals': ['0', '1', '2'],
        'cellVal': '2',
    },
    // 6
    {
        'changeState': false,
    },
    // 7
    {
        'changeState': true, // if changeState == false, other info is optional
        'allocation': {'row':'sex', 'col':'category', 'cell':'age'},
        'rowVals': ['m', 'f'],
        'colVals': ['0', '1', '2'],
        'cellVal': '4',
    }
];
