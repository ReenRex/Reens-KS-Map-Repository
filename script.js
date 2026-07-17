// This file handles page behavior — you shouldn't need to edit it.
// To add or change map entries, edit data.js instead.

let path = []; // e.g. ["Europe", "France", "20th Century"]

function goTo(newPath){
  path = newPath;
  render();
}

// A tutorial can be written two ways in a country's data.js:
//   tutorial: [ {caption, src}, ... ]                      — no intro note
//   tutorial: { intro: "...", steps: [ {caption, src}, ... ] } — with an intro note
// This makes both work the same way everywhere else in the code.
function normalizeTutorial(tutorial){
  if(Array.isArray(tutorial)){
    return { intro: '', steps: tutorial };
  }
  return { intro: tutorial.intro || '', steps: tutorial.steps || [] };
}

function render(){
  const contentEl = document.getElementById('content');
  const crumbEl = document.getElementById('breadcrumb');

  // Breadcrumb
  crumbEl.innerHTML = '';
  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home';
  homeLink.addEventListener('click', () => goTo([]));
  crumbEl.appendChild(homeLink);

  path.forEach((p, i) => {
    crumbEl.appendChild(document.createTextNode(' > '));
    if(i === path.length - 1){
      crumbEl.appendChild(document.createTextNode(p));
    } else {
      const crumbLink = document.createElement('a');
      crumbLink.textContent = p;
      const targetPath = path.slice(0, i + 1);
      crumbLink.addEventListener('click', () => goTo(targetPath));
      crumbEl.appendChild(crumbLink);
    }
  });

  // Walk to current level in data
  let level = data;
  for(const p of path){
    level = level[p];
  }

  contentEl.innerHTML = '';

  if(path.length < 3){
    // still navigating continent -> country -> century
    const keys = Object.keys(level);
    if(keys.length === 0){
      const emptyMsg = document.createElement('p');
      emptyMsg.textContent = 'Nothing listed here yet.';
      contentEl.appendChild(emptyMsg);
    } else {
      const ul = document.createElement('ul');
      keys.forEach(k => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = k;
        const targetPath = [...path, k];
        link.addEventListener('click', () => goTo(targetPath));
        li.appendChild(link);
        ul.appendChild(li);
      });
      contentEl.appendChild(ul);
    }
  } else {
    // path.length === 3, level is an array of links
    if(level.length === 0){
      const emptyMsg = document.createElement('p');
      emptyMsg.textContent = 'No links added yet for this century.';
      contentEl.appendChild(emptyMsg);
    } else {
      const ul = document.createElement('ul');
      level.forEach(linkData => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkData.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = linkData.title;
        li.appendChild(a);

        if(linkData.tutorial && normalizeTutorial(linkData.tutorial).steps.length > 0){
          const tutorialLink = document.createElement('a');
          tutorialLink.textContent = '(Download Tutorial)';
          tutorialLink.className = 'tutorial-link';
          tutorialLink.addEventListener('click', () => openTutorial(linkData.title, linkData.tutorial));
          li.appendChild(tutorialLink);
        }

        ul.appendChild(li);
      });
      contentEl.appendChild(ul);
    }
  }
}

// ---- Tutorial modal ----
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openTutorial(title, tutorialRaw){
  const { intro, steps } = normalizeTutorial(tutorialRaw);

  modalTitle.textContent = title + ' — Download Tutorial';
  modalBody.innerHTML = '';

  if(intro){
    const introEl = document.createElement('p');
    introEl.className = 'tutorial-intro';
    introEl.textContent = intro;
    modalBody.appendChild(introEl);
  }

  steps.forEach(step => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'tutorial-step';

    if(step.src){
      const img = document.createElement('img');
      img.src = step.src;
      img.alt = step.caption;
      stepDiv.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'screenshot-placeholder';
      placeholder.textContent = 'Screenshot not added yet';
      stepDiv.appendChild(placeholder);
    }

    if(step.caption){
      const caption = document.createElement('p');
      caption.textContent = step.caption;
      stepDiv.appendChild(caption);
    }

    modalBody.appendChild(stepDiv);
  });
  modalOverlay.classList.add('open');
}

function closeModal(){
  modalOverlay.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

render();
