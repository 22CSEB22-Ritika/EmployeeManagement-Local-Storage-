const employees = [
  {
    id: 1,
    name: "Ritika Sachdeva",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Report",
        description: "Prepare the monthly financial report.",
        date: "2025-07-09",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss project updates with client.",
        date: "2025-07-10",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "System Upgrade",
        description: "Upgrade to the latest software version.",
        date: "2025-07-11",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name:"Matcharani",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Check warehouse inventory.",
        date: "2025-07-08",
        category: "Logistics",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Social Media Campaign",
        description: "Launch new marketing campaign.",
        date: "2025-07-15",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Product Review",
        description: "Review new product design.",
        date: "2025-07-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Data Backup",
        description: "Complete data backup process.",
        date: "2025-07-09",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    name: "Ishika Sachdeva",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "User Feedback",
        description: "Collect user feedback on the latest app update.",
        date: "2025-07-10",
        category: "Customer Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Conduct internal security audit.",
        date: "2025-07-13",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Website Maintenance",
        description: "Perform routine website maintenance.",
        date: "2025-07-14",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Reyansh",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Recruitment Drive",
        description: "Plan and execute recruitment drive.",
        date: "2025-07-12",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Training Session",
        description: "Conduct employee training session.",
        date: "2025-07-15",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Performance Review",
        description: "Review employee performance reports.",
        date: "2025-07-16",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Database Cleanup",
        description: "Clean and optimize database records.",
        date: "2025-07-11",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Vendor Payment",
        description: "Process vendor payments for this month.",
        date: "2025-07-17",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Kartik Goenka",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Bug Fixing",
        description: "Fix bugs reported by QA team.",
        date: "2025-07-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review code submissions from team.",
        date: "2025-07-09",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate payment gateway API.",
        date: "2025-07-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Documentation",
        description: "Update project documentation.",
        date: "2025-07-11",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Armaan",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    // console.log(JSON.parse(data))
    return {employees,admin}
}