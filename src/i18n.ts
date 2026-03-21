const EN = {
	command: {
		toggleShowEmptyMetadata: 'Metadata Hider: Toggle showing empty metadata properties',
		showEmptyMetadataOn: 'Metadata Hider: showing empty metadata properties.',
		showEmptyMetadataOff: 'Metadata Hider: hiding empty metadata properties (per settings).',
	},
	setting: {
		entries: {
			hide: {
				tableInactive: "Hide in property table",
				tableActive: "Always hide in property table",
				fileProperties: "Hide in file properties (side dock)",
				allProperties: "Hide in all properties (side dock)",
			},
			toggle: "Toggle",
			addEntryToHide: "Add metadata property entry to hide",
		},
		autoFold: {
			name: "Auto fold metadata properties table",
			desc: "Auto fold when opening a note."
		},
		headings: {
			hide: "Hide metadata properties",
		},
		notifyToggleShowEmpty: {
			name: "Notice when toggling empty metadata visibility",
			desc: "Show a pop-up when you use the command to show or hide empty metadata properties.",
		},
	}

}

const ZH = {
	command: {
		toggleShowEmptyMetadata: 'Metadata Hider：切换是否显示空白元数据属性',
		showEmptyMetadataOn: 'Metadata Hider：正在显示空白元数据属性。',
		showEmptyMetadataOff: 'Metadata Hider：按设置隐藏空白元数据属性。',
	},
	setting: {
		entries: {
			hide: {
				tableInactive: "在属性表格中隐藏",
				tableActive: "总是在属性表格中隐藏",
				fileProperties: "在文件属性中隐藏（侧边栏）",
				allProperties: "在所有属性中隐藏（侧边栏）",
			},
			toggle: "开关",
			addEntryToHide: "添加要隐藏的元数据属性条目",
		},
		autoFold: {
			name: "自动折叠元数据属性表格",
			desc: "在打开笔记时自动折叠。"
		},
		headings: {
			hide: "隐藏元数据属性",
		},
		notifyToggleShowEmpty: {
			name: "切换空白元数据显示时弹出提示",
			desc: "使用命令显示或隐藏空白元数据属性时，是否显示弹窗提示。",
		},
	}
}


export class Locals {
	static get() {
		const lang = window.localStorage.getItem("language");
		switch (lang?.toLowerCase()) {
			case "zh":
				return ZH;
			case "zh-tw":
				return ZH;
			default:
				return EN;
		}
	}
}
