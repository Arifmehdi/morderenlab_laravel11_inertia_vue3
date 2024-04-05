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
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="input-group form-group mb-3">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fa fa-user"></i>
                                                    </span>
                                                    </div>
                                                    <!-- <input type="text" class="form-control" placeholder="{{__('Name')}}" name="name" value="{{auth()->guard('admin')->user()->name}}" required> -->
                                                    <input type="text" class="form-control" placeholder="Name'" name="name" value="" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="input-group form-group mb-3">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                                    </span>
                                                    </div>
                                                    <!-- <input type="email" class="form-control" placeholder="{{__('Email Address')}}" name="email" value="{{auth()->guard('admin')->user()->email}}"  required> -->
                                                    <input type="email" class="form-control" placeholder="Email Address" name="email" value=""  required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="input-group form-group mb-3">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                            <i class="fa fa-key" aria-hidden="true"></i>
                                                    </span>
                                                    </div>
                                                    <!-- <input type="password" class="form-control" placeholder="{{__('Password')}}" name="password" id="password"> -->
                                                    <input type="password" class="form-control" placeholder="Password" name="password" id="password">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="input-group form-group mb-3">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                            <i class="fa fa-key" aria-hidden="true"></i>
                                                    </span>
                                                    </div>
                                                    <!-- <input type="password" class="form-control" placeholder="{{__('Password Confirmation')}}" name="password_confirmation" id="password_confirmation"> -->
                                                    <input type="password" class="form-control" placeholder="Password Confirmation" name="password_confirmation" id="password_confirmation">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- @can('sign_report') -->
                                        <div class="row">
                                            <div class="col-lg-10">

                                                <div class="input-group form-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-signature" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                    <div class="custom-file">
                                                        <input type="file" accept="image/*" class="custom-file-input" id="exampleInputFile" name="signature">
                                                        <label class="custom-file-label" for="exampleInputFile">
                                                            <!-- {{__('Choose your signature')}} -->
                                                            Choose your signature
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-lg-2">
                                                <div class="card card-primary">
                                                    <div class="card-header">
                                                        <h5 class="card-title" style="text-align: center!important;float: unset;">
                                                            <!-- {{__('Signature')}} -->
                                                            Signature
                                                        </h5>
                                                    </div>
                                                    <div class="card-body p-1">
                                                        <!-- <img class="img-thumbnail" src="@if(!empty(auth()->guard('admin')->user()->signature)){{url('uploads/signature/'.auth()->guard('admin')->user()->signature)}} @else {{url('img/no-image.png')}} @endif" alt="{{__('Signature')}}"> -->
                                                        <img class="img-thumbnail" alt="Signature'">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
