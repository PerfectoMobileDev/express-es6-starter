import Oy from 'oy-vey';
import React from 'react';

import Email from './Email.jsx';



export const getMail3 = ({name, history}) => {
// export const getMail3 = () => {
  return Oy.renderTemplate(<Email name={name} history={history}/>, {
    title: 'Perfecto Report',
    previewText: 'Perfecto Report'
  });
};

const name = 'Nightly Build for Branch v569270574';

const history = [
  {
    id: '5b0b07e497ada07e5b8215ba',
    name: 'Nightly Build for Branch v569270574',
    number: 8,
    branch: 'v569270574',
    startTime: 1529004771697,
    endTime: 1529005431697,
    statuses: {
      FAILED: 0,
      PASSED: 10
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572988,
      lastUpdatedAt: 1527449573081
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b9',
    name: 'Nightly Build for Branch v569270574',
    number: 7,
    branch: 'v569270574',
    startTime: 1528399971697,
    endTime: 1528400631697,
    statuses: {
      FAILED: 1,
      PASSED: 9
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572907,
      lastUpdatedAt: 1527449572907
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b8',
    name: 'Nightly Build for Branch v569270574',
    number: 6,
    branch: 'v569270574',
    startTime: 1527881571697,
    endTime: 1527882231697,
    statuses: {
      FAILED: 2,
      PASSED: 8
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572842,
      lastUpdatedAt: 1527449572842
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b7',
    name: 'Nightly Build for Branch v569270574',
    number: 5,
    branch: 'v569270574',
    startTime: 1527449571697,
    endTime: 1527450231697,
    statuses: {
      FAILED: 3,
      PASSED: 7
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572778,
      lastUpdatedAt: 1527449572778
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b6',
    name: 'Nightly Build for Branch v569270574',
    number: 4,
    branch: 'v569270574',
    startTime: 1527103971697,
    endTime: 1527104631697,
    statuses: {
      FAILED: 4,
      PASSED: 6
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572705,
      lastUpdatedAt: 1527449572705
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b5',
    name: 'Nightly Build for Branch v569270574',
    number: 3,
    branch: 'v569270574',
    startTime: 1526844771697,
    endTime: 1526845431697,
    statuses: {
      FAILED: 5,
      PASSED: 5
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572647,
      lastUpdatedAt: 1527449572647
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b4',
    name: 'Nightly Build for Branch v569270574',
    number: 2,
    branch: 'v569270574',
    startTime: 1526671971697,
    endTime: 1526672631697,
    statuses: {
      FAILED: 6,
      PASSED: 4
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572535,
      lastUpdatedAt: 1527449572535
    }
  },
  {
    id: '5b0b07e497ada07e5b8215b1',
    name: 'Nightly Build for Branch v569270574',
    number: 1,
    branch: 'v569270574',
    startTime: 1526585571697,
    endTime: 1526586231697,
    statuses: {
      FAILED: 7,
      PASSED: 3
    },
    testExecutionIds: [],
    tracking: {
      createdAt: 1527449572408,
      lastUpdatedAt: 1527449572408
    }
  }
];
