<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>
<script>
import Breadcumb from '@/Pages/partial/Breadcumb.vue';

export default {
  components: {
    Breadcumb
  },
  data() {
    return {
        message: 'Profile',
        iconClass: 'fa fa-user-circle'

    };
  }
}
</script>
<template>
    <div>
        <Head title="Profile" />

        <AuthenticatedLayout>
            <div class="content-wrapper">
                <Breadcumb :message="message" :iconClass="iconClass"></Breadcumb>
                    <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">

                        <!-- content goes here  -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Edit Profile</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- <form method="POST" action="{{route('admin.profile.update')}}" enctype="multipart/form-data" id="profile_form"> -->
                            <form method="POST" action="#" enctype="multipart/form-data" id="profile_form">
                                <!-- @csrf -->
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <!-- @include('admin.profile._form') -->
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="col-lg-12">
                                        <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-check"></i> Save
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <!-- /.card-body -->
                        </div>
                        <!-- content end here  -->
                    </div>
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->
        </AuthenticatedLayout>
    </div>
</template>
