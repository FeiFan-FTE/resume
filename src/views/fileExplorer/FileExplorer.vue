<!--
 * @Author: feifan
 * @Date: 2020-08-10 13:37:53
 * @LastEditors: feifan
 * @LastEditTime: 2020-08-10 15:05:49
-->
<template>
  <div class="fileExplorer">
    <Card style="width:600px">
      <!-- head button -->
      <Row>
        <Col>
          <Row>
            <Col span="1" style="width:32px">
              <Button type="primary" icon="ios-arrow-back"></Button>
            </Col>
            <Col span="21">
              <Input v-model="value" placeholder="Enter something..." />
            </Col>
            <Col span="1" style="width:32px">
              <Button type="primary" icon="md-refresh-circle"></Button>
            </Col>
          </Row>
        </Col>
        <!--  -->
        <Col>
          <Row>
            <Col style="margin:10px 0">
              <Button type="success" @click="handleAddFile">创建</Button>
              <Button style="margin:0 5px" type="primary" @click="handleUplode">上传</Button>
              <!-- <Button>删除</Button> -->
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Table
              row-key="id"
              ref="selection"
              :load-data="handleLoadData"
              :columns="columns"
              :data="data"
            ></Table>
          </Row>
        </Col>
      </Row>
      <Drawer
        title="上传文件"
        :inner="true"
        :transfer="false"
        placement="right"
        :closable="false"
        v-model="FileAddModal"
      >
        <Input v-model="fileValue" style="padding:10px" placeholder="Enter something..." />
        <div class="add-com-style">
          <Divider />
          <div>
            <Button type="warning" style="margin: 0 5px" @click="cancel">取消</Button>
            <Button type="primary" @click="addExcute" :loading="addSaveLoading">
              <span v-if="!addSaveLoading">确定</span>
              <span v-else>Loading...</span>
            </Button>
          </div>
        </div>
      </Drawer>
      <Drawer
        title="上传文件"
        :inner="true"
        :transfer="false"
        placement="right"
        :closable="false"
        width="70"
        v-model="uploaderModal"
      >
        <FileUpload></FileUpload>
      </Drawer>
    </Card>
    <!-- 上传文件 -->
    <!-- <Modal v-model="uploaderModal" title="上传文件" @on-ok="ok" @on-cancel="cancel">
        <FileUpload></FileUpload>
    </Modal>-->
  </div>
</template>
<script>
import FileUpload from "@/components/upload/Upload";
export default {
  name: "fileExplorer",
  components: {
    FileUpload,
  },
  data() {
    return {
      value: "/www/wwwfel/",
      uploaderModal: false,
      FileAddModal: false,
      addSaveLoading: false,
      fileValue: "",
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "文件名",
          key: "name",
          tree: true,
        },
        {
          title: "修改时间",
          key: "date",
        },
        {
          title: "操作",
          width: 135,
          align: "center",
          render: (h, params) => {
            let t = this;
            return h("div", [
              h(
                "Poptip",
                {
                  props: {
                    transfer: true,
                    confirm: true,
                    type: "error",
                    size: "large",
                    title: `你确定要删除【${params.row.name}】吗?`,
                  },
                  on: {
                    "on-ok": () => {},
                  },
                },
                [
                  h(
                    "Button",
                    {
                      props: {
                        type: "error",
                        size: "small",
                      },
                      style: {
                        marginLeft: "5px",
                      },
                    },
                    "删除"
                  ),
                ]
              ),
            ]);
          },
        },
      ],
      data: [
        {
          id: "100",
          name: "John Brown",
          date: "2016-10-03",
        },
        {
          id: "101",
          name: "Jim Green",
          date: "2016-10-01",
          _loading: false,
          children: [],
        },
        {
          id: "102",
          name: "Joe Black",

          date: "2016-10-02",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
        {
          id: "103",
          name: "Jon Snow",
          date: "2016-10-04",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleLoadData(item, callback) {
      setTimeout(() => {
        const data = [
          {
            id: "10100",
            name: "John Brown",
            date: "2016-10-04",
          },
          {
            id: "10101",
            name: "Joe Blackn",
            date: "2016-10-04",
          },
        ];
        callback(data);
      }, 2000);
    },
    handleAddFile() {
      this.FileAddModal = true;
    },
    handleUplode() {
      this.uploaderModal = true;
    },
    ok() {
      //   this.$Message.info("Clicked ok");
    },
    cancel() {
      //   this.$Message.info("Clicked cancel");
    },
    addExcute() {},
  },
};
</script>
<style >
.add-com-style {
  width: 100%;
  position: absolute;
  bottom: 10px;
}
.fileExplorer .ivu-drawer-body {
  padding: 0;
}
</style>