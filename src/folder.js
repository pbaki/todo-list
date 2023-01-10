

const folder = function(id, title) {

  const object = () => {
    const domel = document.getElementsByClassName("project" + myProjects.length);
    console.log(domel);
    return domel;
  }


  return {id, title, object}
}

//console.log(folder("title"))

export default folder;