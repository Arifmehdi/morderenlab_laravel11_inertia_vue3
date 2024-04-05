<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark" >
                            <i :class="iconClass"></i>
                            {{ message }}
                        </h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#" @click="$inertia.visit(route('dashboard'))">Home</a>
                            </li>
                            <li class="breadcrumb-item active">{{ message }}</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
    </div>
</template>

<script>
export default {
  props: {
    message: String,
    iconClass: String
  }
};
</script>
