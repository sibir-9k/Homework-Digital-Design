let intervalId;
const dropDownBtn = () => {
	let settingBtns = document.querySelectorAll('.setting-btn');
	let settingUserBtn = document.querySelector(`[data-path="user"]`);

	settingBtns.forEach((e) => {
		e.addEventListener('click', (e) => {
			const dropDownBtn = e.currentTarget;
			const dropDownBtnName = e.currentTarget.dataset.path;
			const dropDownList = document.querySelector(`[data-target=${dropDownBtnName}]`);

			document.querySelectorAll('.setting-drop-down__list').forEach((e) => {
				if (!dropDownList.classList.contains('open')) {
					e.classList.remove('open');
					intervalId = setTimeout(() => {
						dropDownList.classList.add('open');
						if (dropDownBtn === settingUserBtn) {
							settingUserBtn.classList.add('active');
						} else {
							settingUserBtn.classList.remove('active');
						}
					}, 0);
				}

				if (dropDownList.classList.contains('open')) {
					clearTimeout(intervalId);
					settingUserBtn.classList.remove('active');
					intervalId = setTimeout(() => {
						dropDownList.classList.remove('open');
					}, 0);
				}

				window.onclick = (e) => {
					if (
						e.target === dropDownList ||
						e.target === document.querySelector(`[data-path=${dropDownBtnName}`)
					) {
						return;
					} else {
						dropDownList.classList.remove('menu-active');
						dropDownList.classList.remove('open');
						dropDownBtn.classList.remove('active');
					}
				};
			});
		});
	});
};

export default dropDownBtn;
