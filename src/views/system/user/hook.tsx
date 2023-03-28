import dayjs from "dayjs";
import { message } from "@/utils/message";
import { getUserList } from "@/api/system";
import { ElMessageBox } from "element-plus";
import { type PaginationProps } from "@pureadmin/table";
import { reactive, ref, computed, onMounted } from "vue";
import { utils, writeFile } from "xlsx";

export function useUser() {
  const form = reactive({
    username: "",
    mobile: "",
    status: ""
  });
  const checkList = ref([]);
  const dataList = ref([]);
  const selectList = ref([]);
  const loading = ref(true);
  const switchLoadMap = ref({});
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      type: "selection",
      width: 55,
      align: "left"
      // hide: ({ checkList }) => !checkList.includes("勾选列")
    },
    {
      label: "序号",
      type: "index",
      width: 70,
      hide: ({ checkList }) => !checkList.includes("序号")
    },
    {
      label: "用户编号",
      prop: "id",
      minWidth: 130,
      hide: ({ checkList }) => !checkList.includes("用户编号")
    },
    {
      label: "用户名称",
      prop: "username",
      minWidth: 130,
      hide: ({ checkList }) => !checkList.includes("用户名称")
    },
    {
      label: "用户昵称",
      prop: "nickname",
      minWidth: 130,
      hide: ({ checkList }) => !checkList.includes("用户昵称")
    },
    {
      label: "性别",
      prop: "sex",
      minWidth: 90,
      cellRenderer: ({ row, props }) => (
        <el-tag
          size={props.size}
          type={row.sex === 1 ? "danger" : ""}
          effect="plain"
        >
          {row.sex === 1 ? "女" : "男"}
        </el-tag>
      ),
      hide: ({ checkList }) => !checkList.includes("性别")
    },
    {
      label: "部门",
      prop: "dept",
      minWidth: 90,
      formatter: ({ dept }) => dept.name,
      hide: ({ checkList }) => !checkList.includes("部门")
    },
    {
      label: "手机号码",
      prop: "mobile",
      minWidth: 90,
      hide: ({ checkList }) => !checkList.includes("手机号码")
    },
    {
      label: "状态",
      prop: "status",
      minWidth: 90,
      hide: ({ checkList }) => !checkList.includes("状态"),
      cellRenderer: scope => (
        <el-switch
          size={scope.props.size === "small" ? "small" : "default"}
          loading={switchLoadMap.value[scope.index]?.loading}
          v-model={scope.row.status}
          active-value={1}
          inactive-value={0}
          active-text="已开启"
          inactive-text="已关闭"
          inline-prompt
          onChange={() => onChange(scope as any)}
        />
      )
    },
    {
      label: "创建时间",
      minWidth: 90,
      prop: "createTime",
      hide: ({ checkList }) => !checkList.includes("创建时间"),
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 200,
      slot: "operation"
    }
  ];
  const buttonClass = computed(() => {
    return [
      "!h-[20px]",
      "reset-margin",
      "!text-gray-500",
      "dark:!text-white",
      "dark:hover:!text-primary"
    ];
  });

  function onChange({ row, index }) {
    ElMessageBox.confirm(
      `确认要<strong>${
        row.status === 0 ? "停用" : "启用"
      }</strong><strong style='color:var(--el-color-primary)'>${
        row.username
      }</strong>用户吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        switchLoadMap.value[index] = Object.assign(
          {},
          switchLoadMap.value[index],
          {
            loading: true
          }
        );
        setTimeout(() => {
          switchLoadMap.value[index] = Object.assign(
            {},
            switchLoadMap.value[index],
            {
              loading: false
            }
          );
          message("已成功修改用户状态", {
            type: "success"
          });
        }, 300);
      })
      .catch(() => {
        row.status === 0 ? (row.status = 1) : (row.status = 0);
      });
  }

  function handleUpdate(row) {
    console.log(row);
  }

  function handleDelete(row) {
    console.log(row);
  }
  function handleDownload(row) {
    // console.log('aaaaa',row);
    if (selectList.value.length > 0) {
      // console.log("selectList", selectList.value,columns[1].hide);
      const res: string[][] = selectList.value.map((item: DataItem) => {
        const arr = [];
        columns.forEach((column: Columns) => {
          if (column.label) {
            arr.push(item[column.prop]);
          }
        });
        arr.pop();
        return arr;
      });
      const titleList: string[] = [];
      console.log(columns);
      columns.forEach((column: Columns) => {
        if (column.label) {
          titleList.push(column.label);
        }
      });
      titleList.pop();
      res.unshift(titleList);
      console.log(res);
      const workSheet = utils.aoa_to_sheet(res);
      const workBook = utils.book_new();
      utils.book_append_sheet(workBook, workSheet, "数据报表");
      writeFile(workBook, "tableV2.xlsx");
    } else {
      console.log("请至少选中一条数据");
    }
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
    selectList.value = val;
    console.log("selectList", selectList.value);
  }

  async function onSearch() {
    loading.value = true;
    const { data } = await getUserList();
    dataList.value = data.list;
    pagination.total = data.total;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  onMounted(() => {
    onSearch();
  });

  return {
    form,
    loading,
    columns,
    dataList,
    pagination,
    buttonClass,
    onSearch,
    resetForm,
    handleUpdate,
    handleDelete,
    handleDownload,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
