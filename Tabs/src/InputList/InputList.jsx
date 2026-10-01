


const ComponentA = () => {
  return (
    <>
      <h1><b>Component A </b></h1>
    </>
  );
};

const ComponentB = () => {
  return (
    <>
      <h1>Component B </h1>
    </>
  );
};

const ComponentC = () => {
  return (
    <>
      <h1>Component C </h1>
    </>
  );
};

const tabList = [
  {
    id: 1,
    label: "Component A",
    component: ComponentA,
  },
  {
    id: 2,
    label: "Component B",
    component: ComponentB,
  },
  {
    id: 3,
    label: "Component C",
    component: ComponentC,
  },
];


export default tabList
