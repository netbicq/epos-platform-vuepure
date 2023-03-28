<script setup lang="ts">
import { ref } from "vue";
import tree from "./tree.vue";
import { useUser } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Role from "@iconify-icons/ri/admin-line";
import Password from "@iconify-icons/ri/lock-password-line";
import More from "@iconify-icons/ep/more-filled";
import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Search from "@iconify-icons/ep/search";
import Refresh from "@iconify-icons/ep/refresh";
import Download from "@iconify-icons/ep/download";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "User"
});

const formRef = ref();
const {
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
} = useUser();

const getCheckList = parmas => {
  // console.log('getCheckList', parmas)
};
</script>

<template>
  <div class="main">
    <tree class="w-[17%] float-left" />
    <div class="float-right w-[81%]">
      <!-- 头部搜索框 -->
      <el-form
        ref="formRef"
        :inline="true"
        :model="form"
        class="bg-bg_color w-[99/100] pl-8 pt-4"
      >
        <el-form-item label="用户名称：" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名称"
            clearable
            class="!w-[160px]"
          />
        </el-form-item>
        <el-form-item label="手机号码：" prop="mobile">
          <el-input
            v-model="form.mobile"
            placeholder="请输入手机号码"
            clearable
            class="!w-[160px]"
          />
        </el-form-item>
        <el-form-item label="状态：" prop="status">
          <el-select
            v-model="form.status"
            placeholder="请选择"
            clearable
            class="!w-[160px]"
          >
            <el-option label="已开启" value="1" />
            <el-option label="已关闭" value="0" />
          </el-select>
        </el-form-item>
        <!-- 检索按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            :icon="useRenderIcon(Search)"
            :loading="loading"
            @click="onSearch"
          >
            搜索
          </el-button>
          <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
            重置
          </el-button>
        </el-form-item>
      </el-form>
      <!-- 用户管理 -->
      <PureTableBar title="用户管理" @refresh="onSearch">
        <template #buttons>
          <el-button type="primary" :icon="useRenderIcon(AddFill)">
            新增
          </el-button>
          <el-button
            type="success"
            :icon="useRenderIcon(EditPen)"
            @click="handleUpdate(row)"
          >
            修改
          </el-button>
          <!-- <el-button type="primary" :icon="useRenderIcon(Delete)">
		    删除
			</el-button> -->
          <el-popconfirm title="是否确认删除?">
            <template #reference>
              <el-button
                type="danger"
                :icon="useRenderIcon(Delete)"
                @click="handleDelete(row)"
              >
                删除
              </el-button>
            </template>
          </el-popconfirm>
          <el-button
            type="warning"
            :icon="useRenderIcon(Download)"
            @click="handleDownload(row)"
          >
            导出
          </el-button>
        </template>
        <template v-slot="{ size, checkList }">
          <pure-table
            border
            align-whole="center"
            table-layout="auto"
            :loading="loading"
            :size="size"
            :data="dataList"
            :columns="columns"
            :checkList="checkList"
            :pagination="pagination"
            :paginationSmall="size === 'small' ? true : false"
            :header-cell-style="{
              background: 'var(--el-table-row-hover-bg-color)',
              color: 'var(--el-text-color-primary)'
            }"
            @selection-change="handleSelectionChange"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            @change="getCheckList(checkList)"
          >
            <template #operation="{ row }">
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(Password)"
              >
                重置密码
              </el-button>
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(Role)"
              >
                分配角色
              </el-button>
              <!-- <el-popconfirm title="是否确认删除?">
                <template #reference>
                  <el-button
                    class="reset-margin"
                    link
                    type="primary"
                    :size="size"
                    :icon="useRenderIcon(Delete)"
                    @click="handleDelete(row)"
                  >
                    删除
                  </el-button>
                </template>
              </el-popconfirm> -->
            </template>
          </pure-table>
        </template>
      </PureTableBar>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
