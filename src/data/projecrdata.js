const projectdata = [
  {
    id: 1,
    label: "Completed Projects",
    totalCount: 50,
    icon: "checkmark",
    percentage: 12,
    percentageIcon: "arrow-up",
  },
  {
    id: 2,
    label: "Pending Projects",
    totalCount: 20,
    icon: "clock",
    percentage: 20,
    percentageIcon: "arrow-down",
  },
  {
    id: 3,
    label: "Total Projects",
    totalCount: 70,
    icon: "folder",
    percentage: 90,
    percentageIcon: "arrow-right",
  },
  {
    id: 4,
    label: "Overdue Projects",
    totalCount: 17,
    icon: "folder",
    percentage: 30,
    percentageIcon: "arrow-right",
  },
];


export function projectData() {
  return projectdata;
}

