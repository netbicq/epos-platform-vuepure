import { delay } from "@pureadmin/utils";
import { useEpThemeStoreHook } from "@/store/modules/epTheme";
import { defineComponent, ref, computed, type PropType } from "vue";
import ExpandIcon from "./svg/expand.svg?component";
import RefreshIcon from "./svg/refresh.svg?component";
import SettingIcon from "./svg/settings.svg?component";
import CollapseIcon from "./svg/collapse.svg?component";

const props = {
  /** 头部最左边的标题 */
  title: {
    type: String,
    default: "列表"
  },
  /** 对于树形表格，如果想启用展开和折叠功能，传入当前表格的ref即可 */
  tableRef: {
    type: Object as PropType<any>
  }
};

export default defineComponent({
  name: "PureTableBar",
  props,
  emits: ["refresh"],
  setup(props, { emit, slots, attrs }) {
    const buttonRef = ref();
    const checkList = ref([
      "序号",
      "用户编号",
      "用户名称",
      "用户昵称",
      "性别",
      "部门",
      "手机号码",
      "状态",
      "创建时间"
    ]);
    const checkes = ref([
      "序号",
      "用户编号",
      "用户名称",
      "用户昵称",
      "性别",
      "部门",
      "手机号码",
      "状态",
      "创建时间"
    ]);
    const checkAll = ref(true);
    const isIndeterminate = ref(false);
    const size = ref("default");
    const isExpandAll = ref(true);
    const loading = ref(false);
    const getDropdownItemStyle = computed(() => {
      return s => {
        return {
          background:
            s === size.value ? useEpThemeStoreHook().epThemeColor : "",
          color: s === size.value ? "#fff" : "var(--el-text-color-primary)"
        };
      };
    });

    // 全选
    const handleCheckAllChange = (val: boolean) => {
      checkList.value = val ? checkes.value : checkList.value;
      checkAll.value = checkList.value.length === checkes.value.length;
      isIndeterminate.value =
        checkList.value.length > 0 &&
        checkList.value.length < checkes.value.length;
    };
    // 中间项
    const handleCheckedCitiesChange = (value: string[]) => {
      console.log(value);
      const checkedCount = value.length;
      checkAll.value = checkedCount === checkes.value.length;
      isIndeterminate.value =
        checkedCount > 0 && checkedCount < checkes.value.length;
    };

    const iconClass = computed(() => {
      return [
        "text-black",
        "dark:text-white",
        "duration-100",
        "hover:!text-primary",
        "cursor-pointer",
        "outline-none"
      ];
    });

    function onReFresh() {
      loading.value = true;
      emit("refresh");
      delay(500).then(() => (loading.value = false));
    }

    function onExpand() {
      isExpandAll.value = !isExpandAll.value;
      toggleRowExpansionAll(props.tableRef.data, isExpandAll.value);
    }

    function toggleRowExpansionAll(data, isExpansion) {
      data.forEach(item => {
        props.tableRef.toggleRowExpansion(item, isExpansion);
        if (item.children !== undefined && item.children !== null) {
          toggleRowExpansionAll(item.children, isExpansion);
        }
      });
    }

    const dropdown = {
      dropdown: () => (
        <el-dropdown-menu class="translation">
          <el-dropdown-item
            style={getDropdownItemStyle.value("large")}
            onClick={() => (size.value = "large")}
          >
            宽松
          </el-dropdown-item>
          <el-dropdown-item
            style={getDropdownItemStyle.value("default")}
            onClick={() => (size.value = "default")}
          >
            默认
          </el-dropdown-item>
          <el-dropdown-item
            style={getDropdownItemStyle.value("small")}
            onClick={() => (size.value = "small")}
          >
            紧凑
          </el-dropdown-item>
        </el-dropdown-menu>
      )
    };

    const reference = {
      reference: () => (
        <SettingIcon
          class={["w-[16px]", iconClass.value]}
          onMouseover={e => (buttonRef.value = e.currentTarget)}
        />
      )
    };

    return () => (
      <>
        <div {...attrs} class="w-[99/100] mt-6 p-2 bg-bg_color">
          <div class="flex justify-between w-full h-[60px] p-4">
            <p class="font-bold truncate">{props.title}</p>
            <div class="flex items-center justify-around">
              {slots?.buttons ? (
                <div class="flex mr-4">{slots.buttons()}</div>
              ) : null}
              {props.tableRef?.size ? (
                <>
                  <el-tooltip
                    effect="dark"
                    content={isExpandAll.value ? "折叠" : "展开"}
                    placement="top"
                  >
                    <ExpandIcon
                      class={["w-[16px]", iconClass.value]}
                      style={{
                        transform: isExpandAll.value ? "none" : "rotate(-90deg)"
                      }}
                      onClick={() => onExpand()}
                    />
                  </el-tooltip>
                  <el-divider direction="vertical" />
                </>
              ) : null}
              <el-tooltip effect="dark" content="刷新" placement="top">
                <RefreshIcon
                  class={[
                    "w-[16px]",
                    iconClass.value,
                    loading.value ? "animate-spin" : ""
                  ]}
                  onClick={() => onReFresh()}
                />
              </el-tooltip>
              <el-divider direction="vertical" />

              <el-tooltip effect="dark" content="密度" placement="top">
                <el-dropdown v-slots={dropdown} trigger="click">
                  <CollapseIcon class={["w-[16px]", iconClass.value]} />
                </el-dropdown>
              </el-tooltip>
              <el-divider direction="vertical" />

              <el-popover v-slots={reference} width="120" trigger="click">
                <el-checkbox
                  v-model={checkAll.value}
                  indeterminate={isIndeterminate.value}
                  onChange={handleCheckAllChange}
                  label="全选"
                />
                <el-checkbox-group
                  v-model={checkList.value}
                  onChange={handleCheckedCitiesChange}
                >
                  <el-checkbox label="序号" />
                  <el-checkbox label="用户编号" />
                  <el-checkbox label="用户名称" />
                  <el-checkbox label="用户昵称" />
                  <el-checkbox label="性别" />
                  <el-checkbox label="部门" />
                  <el-checkbox label="手机号码" />
                  <el-checkbox label="状态" />
                  <el-checkbox label="创建时间" />
                </el-checkbox-group>
              </el-popover>
            </div>

            <el-tooltip
              popper-options={{
                modifiers: [
                  {
                    name: "computeStyles",
                    options: {
                      adaptive: false,
                      enabled: false
                    }
                  }
                ]
              }}
              placement="top"
              virtual-ref={buttonRef.value}
              virtual-triggering
              trigger="hover"
              content="列设置"
            />
          </div>
          {slots.default({ size: size.value, checkList: checkList.value })}
        </div>
      </>
    );
  }
});
