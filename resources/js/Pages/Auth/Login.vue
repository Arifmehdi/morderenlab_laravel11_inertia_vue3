<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<!-- <template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template> -->

<template>
    <div class="hold-transition login-page">
        <Head title="Log in" />
        <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
            <a href="../../index2.html" class="h1"><b>Modern</b>Lab</a>
            </div>
            <div class="card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form @submit.prevent="submit">
                <div class="input-group mb-3">
                <!-- <input type="email" class="form-control" placeholder="Email"> -->
                <!-- <//InputLabel class="form-control" for="email" value="Email" /> -->
                <TextInput
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder ="Enter email"
                />
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                    </div>
                </div>
                <InputError class="mt-2" :message="form.errors.email" />
                </div>
                <div class="input-group mb-3">
                    <TextInput
                    id="password"
                    type="password"
                    class="form-control"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    placeholder ="Enter password"
                />
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                    </div>
                </div>
                <InputError class="mt-2" :message="form.errors.password" />
                </div>
                <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                    <!-- <//Checkbox name="remember" v-model:checked="form.remember" /> -->
                    <input type="checkbox" id="remember">
                    <label for="remember">
                        Remember Me
                    </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                    <PrimaryButton class="btn btn-primary btn-block" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Log in
                    </PrimaryButton>
                    <!-- <button type="submit" class="btn btn-primary btn-block">Sign In</button> -->
                </div>
                <!-- /.col -->
                </div>
            </form>

            <div class="social-auth-links text-center mt-2 mb-3">
                <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
            </div>
            <!-- /.social-auth-links -->

            <p class="mb-1">
                <!-- <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                I forgot my password
                </Link> -->
                <a href="#">I forgot my password</a>
            </p>
            <p class="mb-0">
                <a href="#" class="text-center">Register a new membership</a>
            </p>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
</div>
    </div>
</template>

<script>
import logo from '../../../../public/backend/img/logo.png';
import imagePath from '../../../../public/backend/assets/images/bg-01.jpg'
export default {
  data() {
    return {
      languages: [],
      currentLocale: 'en', // Initialize with your desired locale value
      local: 'en',
      logoPath: logo,
      imagePath : imagePath
    }
  },
  mounted() {
    this.languages = this.$props.languages;
    this.currentLocale = this.$props.currentLocale;
    // You can fetch the locale from wherever you are storing it, like Vuex, localStorage, or any other source
    // For example, if using Vuex:
    // this.locale = this.$store.state.locale;
    // Or if storing in localStorage:
    // this.locale = localStorage.getItem('locale');
    // Replace the above with whatever logic you use to set the locale value
  }
}
</script>
